const handleClick = () => {
    browser.sidebarAction.toggle();
}
browser.action.onClicked.addListener(handleClick);