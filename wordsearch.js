function searchWithAI(info, tab) {
	const searchText = info.selectionText;
	const searchUrl = `https://www.perplexity.ai/?q=${encodeURIComponent(
		searchText
	)}`;
	browser.tabs.create({ url: searchUrl });
}
browser.contextMenus.create({
	id: "search-with-AI",
	title: "Search "%s" with Perplexity",
	contexts: ["selection"],
});
browser.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "search-with-AI") {
		searchWithAI(info, tab);
	}
});
