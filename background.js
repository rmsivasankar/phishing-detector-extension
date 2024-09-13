// background.js

chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
      // Analyze URL patterns to detect phishing scripts or malicious domains
      if (isPhishingURL(details.url)) {
        // Warn the user or block the request
        console.warn("Phishing attempt detected:", details.url);
        return { cancel: true }; // Blocks the request if identified as phishing
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  
  function isPhishingURL(url) {
    // Simple check: Look for known malicious domains or phishing signatures in URLs
    const phishingDomains = [
      "malicioussite.com",
      "phishingsite.net",
      "dangerouslogin.io"
    ];
  
    // Return true if the URL matches any of the phishing domains
    return phishingDomains.some(domain => url.includes(domain));
  }
  