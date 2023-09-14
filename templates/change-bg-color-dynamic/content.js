chrome.runtime.onMessage.addListener(({ color = '#86efac' }) => {
  document.body.style.backgroundColor = color
  return Promise.resolve()
})
