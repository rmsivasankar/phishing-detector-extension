// content.js

window.onload = function () {
    const scripts = document.getElementsByTagName('script');
  
    for (let script of scripts) {
      // Check if script source or inline content is suspicious
      if (isMaliciousScript(script.src) || isSuspiciousInlineScript(script)) {
        alert("Warning: A potentially malicious script was detected on this page.");
      }
    }
  };
  
  function isMaliciousScript(src) {
    // Check against a list of known phishing script URLs
    const knownMaliciousScripts = [
      "https://evil.com/malware.js",
      "https://phishingattack.com/stealer.js"
    ];
  
    return knownMaliciousScripts.some(malicious => src.includes(malicious));
  }
  
  function isSuspiciousInlineScript(script) {
    // Analyze the inline script content for obfuscation or suspicious patterns
    const suspiciousPatterns = [/eval\(/, /document\.cookie/, /window\.location/];
  
    // Check for any suspicious pattern in the inline script
    return suspiciousPatterns.some(pattern => pattern.test(script.textContent));
  }
  