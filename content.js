// content.js

window.onload = function () {
    // Check if the site is using HTTP
    if (window.location.protocol === "http:") {
      alert("Warning: You are visiting an insecure website (HTTP). This site may not be secure, and it could potentially be a phishing page.");
    }
  };
  