/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

const websiteLinkElement = document.getElementById("websiteLink");
const returnBtn = document.getElementById("returnButton");
// const continueBtn = document.getElementById("continueAnyway");

let hash = window.location.hash.substring(1);
console.log("URL fragment is '" + hash + "'");
console.log(history.length);

websiteLinkElement.textContent = hash;

returnBtn.addEventListener("click", function() {
    if (history.length > 2)
        history.go(-2);
    else
        // or if there aren't enough history, then simply close the tab
        chrome.tabs.getCurrent(tab => chrome.tabs.remove(tab.id));
});

continueBtn.addEventListener("click", function() {
    // use location.replace to make navigating back here from history not happen
    browser.runtime.sendMessage({ action: "nmaiRedirecting", data: hash });
    window.location.replace(`https://${hash}`);
});
