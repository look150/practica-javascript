'use strict' // Tarea: qué es el modo estricto en JavaScript

// jsdoc
/**
 * Create a HTML element with attributes and children
 * @param {string} tagName HTML tag
 * @param {Object} attributes HTML attributes
 * @param {Array} children HTML child elements
 * @returns {HTMLElement} DOM instance of HTMLElement
 * @example
 *
 * const el = createElement('h1', { class: 'title' }, ['Hi createElement'])
 * console.log(el)
 *
 * // <h1 class="title">Hi createElement</h1>
 */
export default function createElement(tagName, attributes, children) {
  if (typeof tagName !== 'string') throw new Error('tagName must be an string')

  const el = document.createElement(tagName)

  if (attributes) {
    if (Object.prototype.toString.call(attributes) !== '[object Object]') {
      throw new Error('attributes mus be an object')
    }

    Object.keys(attributes).forEach(attr => {
      el.setAttribute(attr, attributes[attr])
    })
  }

  if (!Array.isArray(children)) throw new Error('children must be an array')

  addChild(el, children)
  return el
}

/**
 *
 * @param {HTMLElement} parent
 * @param {Array} children
 */
export function addChild (parent, children) {
  if (!Array.isArray(children)) throw new Error('children must be an array')

  if (!(parent instanceof window.HTMLElement)) throw new Error('parent must be an instance of HTMLElement')

  children.forEach(child => {
    if (child instanceof window.HTMLElement) {
      parent.appendChild(child)
    } else {
      parent.innerHTML += child // parent.innerHTML = parent.innerHTML + child
    }
  })
}
