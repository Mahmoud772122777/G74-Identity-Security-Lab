# G74 Identity Security Lab — Implementation

**Project:** Cybersecurity Identity Verification Demo  
**Case study:** Social Engineering and the MGM Resorts Cyberattack (2023)  
**Student:** Mahmoud Al-Aidaros  
**PRN:** 23070122129  
**Group:** 74

## 1. Overview

This browser-based educational simulation demonstrates why account recovery and MFA-reset requests should be verified before access is changed. It highlights three defensive checks:

1. Callback using a trusted contact number already on record.
2. Independent identity proofing.
3. Approval by a second authorized person.

The demo is inspired by identity-based social-engineering risks discussed in the MGM Resorts case study. It does **not** claim to reproduce MGM's internal systems or the exact attack sequence.

## 2. Requirements

- A modern web browser (Chrome, Edge, Firefox, etc.).
- No package installation, server, database, or executable is required.

## 3. How to run

### Option A — Open in a browser
1. Extract the ZIP file.
2. Open `index.html` in a browser.
3. Select the verification controls and choose **Evaluate request**.
4. Observe the decision and verification score.
5. Select **Reset simulation** to try again.

### Option B — VS Code
1. Open the extracted project folder in Visual Studio Code.
2. Open `index.html`.
3. Run it with the Live Server extension if installed, or open the file directly in your browser.

## 4. Files included

- `index.html` — application layout and content.
- `src/styles.css` — responsive visual design.
- `src/app.js` — local decision logic.
- `README.md` — this execution guide.

## 5. Expected behavior

- With fewer than three checks selected, the app recommends holding the request.
- When all three checks are selected, the app indicates that the request is eligible for formal review.
- Reset returns the simulation to its initial state.

This is a simplified training model, not a real authentication or access-management system.

## 6. GitHub repository

[G74 Identity Security Lab](https://github.com/Mahmoud772122777/G74-Identity-Security-Lab)

## 7. Scope and safety

This project is a fictional awareness demo. It does not collect credentials, connect to real accounts, send network requests, or perform security testing against any system. It is intended for academic demonstration only.
