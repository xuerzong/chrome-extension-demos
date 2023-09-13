const getCurrentTab = async () => {
    const tabs = await chrome.tabs.query({
        active: true,
        currentWindow: true
    })

    return tabs[0] || {}
}

chrome.contextMenus.create({
    type: 'normal',
    title: 'chrome extension demo',
    id: 'chromeExtensionDemo',
    contexts: ['all'],
}, () => {
    console.log('context menus are loaded')
})


chrome.contextMenus.onClicked.addListener(({ selectionText = '' }) => {
    getCurrentTab().then(tab => {
        if(!tab) return
        chrome.tabs.sendMessage(tab.id, { text: selectionText })
    })
})