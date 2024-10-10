# PhishGuard - Browser Extension

## Overview

PhishGuard is a browser extension designed to detect phishing websites and assess their security based on multiple key characteristics. It uses a JavaScript-based algorithm that analyzes URLs and page content to provide real-time feedback on the safety of the websites you visit.

## Features

- **Real-Time Phishing Detection**: Instantly analyzes URLs and content as you browse.
- **Key Characteristics Assessment**: Evaluates websites based on programmed security parameters, including:
  - URL structure
  - SSL certificate validity
  - Domain age
  - Known phishing indicators
  - Content analysis
- **User-Friendly Notifications**: Provides clear alerts about the security status of each website.
- **Dashboard for Insights**: View detailed reports and statistics of your browsing history.

## Installation

1. Download the latest release of PhishGuard from the [Chrome Web Store](#) (or equivalent for other browsers).
2. Click on the "Add to Browser" button.
3. Once installed, you will see the PhishGuard icon in your browser toolbar.

## Usage

- Simply browse as usual. PhishGuard will automatically analyze each website you visit.
- When you land on a site, an indicator will display its security status:
  - **Secure**: The site is safe to use.
  - **Warning**: Potential phishing indicators detected.
  - **Unsafe**: The site is confirmed as a phishing attempt.

## Technical Details

### Key Characteristics Analyzed

PhishGuard employs a JSON configuration to manage its detection criteria, which includes:

```json
{
  "characteristics": {
    "urlStructure": {
      "suspiciousKeywords": ["login", "verify", "secure", "update"],
      "maxLength": 75
    },
    "sslCertificate": {
      "required": true
    },
    "domainAge": {
      "minYears": 1
    },
    "knownPhishingIndicators": ["phishing.com", "malicious.net"],
    "contentAnalysis": {
      "maxImageTextRatio": 0.3
    }
  }
}
