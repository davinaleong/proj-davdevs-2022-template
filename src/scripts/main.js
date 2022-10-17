console.log(`main.js loaded`)

const attrDataExpaned = `data-expanded`

const mainHeaderEl = document.querySelector(`[data-element="main-header"]`)
const mainHeaderExpandEl = document.querySelector(
  `[data-element="main-header-expand"]`
)
const mainHeaderCloseEl = document.querySelector(
  `[data-element="main-header-close"]`
)

const mainHeaderDropdownToggleEls = document.querySelectorAll(
  `[data-element="main-header-dropdown-toggle"]`
)
const mainHeaderDropdownMenuEls = document.querySelectorAll(
  `[data-element="main-header-dropdown-menu"]`
)

mainHeaderExpandEl.addEventListener(`click`, (e) => {
  e.preventDefault()
  mainHeaderEl.setAttribute(attrDataExpaned, true)
})

mainHeaderCloseEl.addEventListener("click", (e) => {
  e.preventDefault()
  mainHeaderEl.removeAttribute(attrDataExpaned)
})

mainHeaderDropdownToggleEls.forEach((mainHeaderDropdownToggleEl) => {
  mainHeaderDropdownToggleEl.addEventListener(`click`, (e) => {
    e.preventDefault()

    const tagName = e.target.tagName
    const parentEl =
      tagName === `DIV`
        ? e.target.parentElement.parentElement
        : e.target.parentElement

    if (parentEl.childNodes.length >= 4) {
      mainHeaderDropdownMenuEls.forEach((mainHeaderDropdownMenuEls) =>
        mainHeaderDropdownMenuEls.removeAttribute(attrDataExpaned)
      )

      const dropdownEl = parentEl.childNodes[3]
      dropdownEl.setAttribute(attrDataExpaned, true)
    }
  })
})
