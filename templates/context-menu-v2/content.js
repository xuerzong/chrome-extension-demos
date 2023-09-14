const createPopup = (text) => {
  const div = document.createElement('div')
  div.classList.add('demo-popup')
  div.innerHTML = text
  document.body.appendChild(div)
}

chrome.runtime.onMessage.addListener(({ text = '' }) => {
  createPopup(text)
  return Promise.resolve({ msg: 'ok' })
})
