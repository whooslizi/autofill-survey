# autofill-servey

> For anyone who's far too lazy (and far too traumatized) to re-live their pain subjects while filling out course evaluations (like me).

[![Install with Tampermonkey](https://img.shields.io/badge/Tampermonkey-Install%20Script-black?style=for-the-badge&logo=tampermonkey&logoColor=red)](https://raw.githubusercontent.com/whooslizi/autofill-servey/eoleun/survey-autofill.user.js)

---

## Installation Guide

### Method 1: Tampermonkey Extension (Recommended)

1. **Install Tampermonkey** for your browser if you haven't already:
   * [Tampermonkey for Chrome & other Chromium based](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   * [Tampermonkey for Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
2. Click the red **Install Script** badge above (or click [here](https://raw.githubusercontent.com/whooslizi/autofill-survey/eoleun/survey-autofill.user.js)).
3. Tampermonkey will intercept the link and open the installation page—click **Install**.
4. Navigate to your course evaluation page on CTT. A floating **`⚡ Điền nhanh khảo sát`** button will appear at the bottom-right corner.
5. Click it, type a rating from `0` to `4`, and hit **OK**!

---

### Method 2: Bookmarklet (No Extensions Required)

If you don't want to install browser extensions or are using a restricted browser:

1. Enable your Bookmarks Bar (`Ctrl + Shift + B` / `Cmd + Shift + B`).
2. Right-click the bar and select **Add page...** (or **Add bookmark**).
3. Set the name to **`Auto Fill Survey`**.
4. Copy and paste the following snippet into the **URL / Location** field:

```javascript
javascript:(function(){const l=prompt("Chọn mức (0-4):","4");if(l===null)return;const i=parseInt(l,10);if(isNaN(i)||i<0||i>4)return alert("Chọn từ 0 đến 4 thôi!");document.querySelectorAll('tr, table, div').forEach(c=>{const r=c.querySelectorAll('input[type="radio"]');if(r.length===5&&r[i])r[i].click();});})();
