let isActive = false

chrome.action.onClicked.addListener(async () => {
  isActive = !isActive
  chrome.action.setIcon({ path: isActive ? './active.png' : './normal.png' })
})
