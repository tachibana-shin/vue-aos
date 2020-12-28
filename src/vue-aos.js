import aos from "aos"
import "aos/dist/aos.css"

function unCamelCase(string) {
  return string.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`).replace(/^-|-$/, "")
}

function removeAttrsAos(el) {
  if (el.hasAttributes()) {
    [...el.attributes].forEach(({ name }) => {
      if (name.match(/^data-aos/)) {
        el.removeAttribute(name)
      }
    })
  }
}

function setAttrsAos(el, values) {
  for (const key in values) {
    el.setAttribute(unCamelCase(`data-aos-${key}`), values[key])
  }
}

function refestElement(el, { arg, modifiers, value }) {
  if (typeof value != "object") {
    value = { duration: value }
  }
  value = Object.assign({}, value, modifiers)
  removeAttrsAos(el)
  value[""] = arg
  setAttrsAos(el, value)
  aos.refresh()
}

export default (Vue, config) => {
  aos.init(config)
  Vue.directive("aos", {
    bind(...args) {
      refestElement(...args)
    },
    update(...args) {
      refestElement(...args)
    },
    unbind(el) {
      removeAttrsAos(el)
    }
  })
}
