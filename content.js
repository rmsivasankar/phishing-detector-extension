// content.js

window.onload = function () {
  const currentDomain = window.location.hostname;

  if (isUntrustedDomain(currentDomain)) {
    const scripts = document.getElementsByTagName('script');
    let maliciousScriptDetected = false;

    for (let script of scripts) {
      if (isMaliciousScript(script.src)) {
        maliciousScriptDetected = true;
      }
    }

    if (maliciousScriptDetected) {
      alert("Warning: A potentially malicious script was detected on this page.");
    }
  }
};

function isUntrustedDomain(domain) {
  // Check if the current domain is in the list of untrusted domains
  const untrustedDomains = [
    "example-untrusted.com",
    "suspiciouslogin.com",
    "shady-website.org"
  ];

  return untrustedDomains.some(untrusted => domain.includes(untrusted));
}

function isMaliciousScript(src) {
  // Define a list of high-risk script URLs
  const highRiskScripts = [
    "https://example-untrusted.com/phishing-script.js",
    "https://suspiciouslogin.com/malware.js"
  ];

  return highRiskScripts.some(maliciousSrc => src.includes(maliciousSrc));
}
