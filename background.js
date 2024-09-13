// background.js

chrome.webNavigation.onCompleted.addListener(function (details) {
    if (details.url.startsWith("http://")) {
      chrome.scripting.executeScript({
        target: { tabId: details.tabId },
        function: showWarning
      });
    }
  }, { url: [{ schemes: ["http"] }] });
  
  function showWarning() {
    alert("Warning: This website is using an insecure HTTP connection. Be cautious about sharing personal information.");
  }
  