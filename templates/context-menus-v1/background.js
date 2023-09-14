chrome.contextMenus.create(
  {
    type: 'normal',
    title: 'chrome extension demo',
    id: 'chromeExtensionDemo',
    contexts: ['all']
  },
  () => {
    console.log('context menus are loaded')
  }
)

chrome.contextMenus.onClicked.addListener((...args) => {
  console.log(...args)
})
