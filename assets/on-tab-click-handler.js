const onTabClickHandler = (e, parentElement) => {
  const buttons = parentElement.querySelectorAll(".tab-button")
  const panels = Array.from(parentElement.querySelectorAll(".tab-panel"))

  panels.forEach((panel) => {
    panel.hidden = "true"
  })

  buttons.forEach((button) => {
    button.setAttribute("aria-selected", "false")
  })

  e.currentTarget.setAttribute("aria-selected", "true")

  const { id } = e.currentTarget

  const currentTab = panels.find(
    (panel) => panel.getAttribute("aria-labelledby") === id
  )

  currentTab.hidden = false
}

window.onTabClickHandler = onTabClickHandler
