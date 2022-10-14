console.log(`main.js loaded`)

const mainHeaderDropdownToggleEls = document.querySelectorAll(
  `[data-element="main-header-dropdown-toggle"]`
)
const mainHeaderDropdownMenuEls = document.querySelectorAll(
  `[data-element="main-header-dropdown-menu"]`
)

mainHeaderDropdownToggleEls.forEach((mainHeaderDropdownToggleEl) => {
  mainHeaderDropdownToggleEl.addEventListener(`click`, (e) => {
    const tagName = e.target.tagName
    const parentEl =
      tagName === `DIV`
        ? e.target.parentElement.parentElement
        : e.target.parentElement

    if (parentEl.childNodes.length >= 4) {
      mainHeaderDropdownMenuEls.forEach((mainHeaderDropdownMenuEls) =>
        mainHeaderDropdownMenuEls.removeAttribute(`data-expanded`)
      )

      const dropdownEl = parentEl.childNodes[3]
      dropdownEl.setAttribute(`data-expanded`, true)
    }
  })
})
