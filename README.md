# G74 Identity Security Lab — Implementation

**Project:** Cybersecurity Identity Verification Demo  
**Case study:** Social Engineering and the MGM Resorts Cyberattack (2023)  
**Student:** Mahmoud Al-Aidaros  
**PRN:** 23070122129  
**Group:** 74

## 1. Overview

This is a small, browser-based educational simulation demonstrating why account recovery and MFA-reset requests should be verified before access is changed. It highlights three defensive checks:

1. Callback using a trusted contact number already on record.
2. Independent identity proofing.
3. Approval by a second authorized person.

The demo is inspired by identity-based social-engineering risks discussed in the MGM Resorts case study. It does **not** claim to reproduce MGM's internal systems or the exact attack sequence.

## 2. Requirements

- A modern web browser (Chrome, Edge, Firefox, etc.).
- No package installation, server, database, or executable is required.

## 3. How to run

### Option A — simplest
1. Extract the ZIP file.
2. Open `index.html` in a browser.
3. Tick the verification controls and select **Evaluate request**.
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

## 6. GitHub repository link

**Add your GitHub repository URL here after creating and pushing the project**, for example:
`https://github.com/YOUR-USERNAME/G74-Identity-Security-Lab`

To publish:
1. Create a new empty repository on GitHub named `G74-Identity-Security-Lab`.
2. Open a terminal in this extracted folder.
3. Run the following commands, replacing the URL with your repository URL:

```bash
git init
git add .
git commit -m "Add identity security training demo"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/G74-Identity-Security-Lab.git
git push -u origin main
```

After pushing, replace the placeholder above with the actual repository URL and include the updated README in your final ZIP.

## 7. Scope and safety

This project is a fictional awareness demo. It does not collect credentials, connect to real accounts, send network requests, or perform security testing against any system. It is intended for academic demonstration only.
