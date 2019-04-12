chrome.contextMenus.create({ 
	id: 'imageFetcher',
	title: 'Get Images',
	contexts: ['all']
});
  
chrome.contextMenus.onClicked.addListener(() => {
	chrome.tabs.query({active: true, currentWindow: true}, tabs => {
		chrome.tabs.sendMessage(tabs[0].id, {type: 'getImages'});
	});
});