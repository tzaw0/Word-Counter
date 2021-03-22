chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let selected = window.getSelection().toString().trim();
    let message = {
        count: 0 
    };
    
    if(selected.length > 0) {
        message.count = selected.split(" ").length
    }

    sendResponse(message)
})
