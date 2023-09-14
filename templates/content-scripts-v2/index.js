const getCurrentTab = async () => {
  const tabs = await chrome.tabs.query({
    active: true,
    currentWindow: true
  })
  return tabs[0]
}

const okBtn = document.getElementById('okBtn')
const colorSelect = document.getElementById('colorSelect')
okBtn.addEventListener('click', () => {
  const color = colorSelect.value
  getCurrentTab().then((tab) => {
    console.log(tab)
    if (!tab) return
    chrome.tabs.sendMessage(tab.id, { color })
  })
})
