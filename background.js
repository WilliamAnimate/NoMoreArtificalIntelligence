/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

let rtIsRedirecting = false;
let rtRedirectTarget;
let rtSafeTab = Number;

// let allowlistedPages = [];
// let allowListed = false;

chrome.webNavigation.onBeforeNavigate.addListener(async (details) => {
    const url = new URL(details.url);
    // TODO: hashmap, lookup table, literally anything that isn't this atrocious
    // maybe RIIR with webassembly to make this  f a s t
    if (url.hostname === "chatgpt.com" || url.hostname === "openai.com" ||
        url.hostname === "phind.com" || url.hostname === "perplexity.ai" ||
        url.hostname === "craiyon.com" || url.hostname === "claude.ai" ||
        url.hostname === "meta.ai"
    ) {
        // if (typeof(rtRedirectTarget != "string")) console.error(`${typeof(rtRedirectTarget)}`);
        // console.log(allowlistedPages);
        // if (allowListed) {
        //     console.warn("allow");
        //     return;
        // }
        // FIXME: allow going to page anyway
        // for (allowed in allowlistedPages) {
        //     console.log(allowed, url.hostname);
        //     if (allowed === url.hostname) {
        //         console.warn("got");
        //         // allowlisted
        //         break;
        //     }
        //     // else {
        //     //     continue;
        //     // }
        // }
        // console.log(`1: ${rtIsRedirecting}\n2: ${!rtIsRedirecting}`);
        // if (!rtIsRedirecting) {
            console.warn("detected ai page");
            browser.tabs.update({ url: browser.runtime.getURL(`error/aiwarn.html#${url.hostname}`) });
        // } else {
        //     rtIsRedirecting = false;
        //     console.warn("set redirecting to false");
        // }
    }
});

// browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "nmaiRedirecting") {
//         console.log(request.data);
//         rtIsRedirecting = true;
//         // rtRedirectTarget = request.data;
//         allowlistedPages.push(request.data);
//         rtSafeTab = request.data;
//     }
// });
