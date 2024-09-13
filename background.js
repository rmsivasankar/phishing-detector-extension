// background.js

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (isUntrustedDomain(details.url)) {
      console.warn("Untrusted domain detected:", details.url);
      if (isPhishingURL(details.url)) {
        console.warn("Phishing attempt detected on:", details.url);
        return { cancel: true }; // Block the request
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);

// List of untrusted domains where phishing might occur
const untrustedDomains = [
  "example-untrusted.com",
  "suspiciouslogin.com",
  "shady-website.org"
];

// List of specific phishing URLs or paths
const phishingURLList = [
  "https://example-untrusted.com/phishing-script.js",
  "https://suspiciouslogin.com/malware.js",
  "https://shady-website.org/login.php"
];

// Function to check if the domain is untrusted
function isUntrustedDomain(url) {
  return untrustedDomains.some(domain => url.includes(domain));
}

// Function to check if the URL is a known phishing attempt
function isPhishingURL(url) {
  return phishingURLList.some(phishingUrl => url.includes(phishingUrl));
}
