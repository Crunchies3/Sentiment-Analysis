chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: 'OFF'
    });
});

chrome.action.setBadgeBackgroundColor({color: 'blue'});
chrome.action.setBadgeTextColor({color: 'white'});


chrome.action.onClicked.addListener(async () => {
    // We retrieve the action badge to check if the extension is 'ON' or 'OFF'
    const prevState = await chrome.action.getBadgeText({});
    // Next state will always be the opposite
    const nextState = prevState === 'ON' ? 'OFF' : 'ON';

    // Set the action badge to the next state
    await chrome.action.setBadgeText({
        text: nextState
    });
});
