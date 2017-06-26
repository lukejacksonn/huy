import { h } from 'hyperapp'

const debounce = (func, wait, immediate) => {
  let timeout
  return function() {
    let [context, args] = [this, arguments]
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  };
};

const noop = _ => _
const debounced = time => fn => debounce(fn, time)
const use = href =>
  h('use', {
    oncreate: e => e.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'href',
      href
    ),
  })

export const link = a => (p={},c=[]) =>
  h('a', Object.assign(p, {
    onclick: e => p.href[0] === '/' &&
      e.preventDefault() || a.router.go(p.href),
  }), c)

export const svg = (p={}) =>
  h('svg', p, use(p.href))

export const img = (p={}) =>
  h('img', p)

export const button = (p={},c=[]) =>
  h('button', p, c)

export const input = (p={}) =>
  h('input', Object.assign(p, {
    oninput: debounced(p.debounce || 0)(p.action || noop)
  }))
