// ==UserScript==
// @name         HUST Survey Auto-Fill Tool
// @namespace    https://github.com/
// @version      1.0.0
// @description  Tu dong dien khao sat danh gia hoc phan HUST
// @author       @whooslizi
// @match        https://ctt-daotao.hust.edu.vn/*
// @match        https://*.hust.edu.vn/*
// @grant        none
// ==UserScript==

(function () {
  'use strict';

  const button = document.createElement('button');
  button.innerText = 'Autofill Survey(s)';
  button.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99999;
    padding: 10px 16px;
    background-color: #c41e3a;
    color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-family: sans-serif;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    transition: transform 0.2s, background-color 0.2s;
  `;

  button.onmouseover = () => button.style.backgroundColor = '#a0182e';
  button.onmouseout = () => button.style.backgroundColor = '#c41e3a';

  button.onclick = function () {
    const level = prompt(
      "Chọn mức đánh giá (0-4):\n" +
      "0: Rất không hài lòng / Không cố gắng\n" +
      "1: Không hài lòng\n" +
      "2: Tạm hài lòng / Bình thường\n" +
      "3: Hài lòng\n" +
      "4: Rất hài lòng / Rất cố gắng",
      "4"
    );

    if (level === null) return;
    const idx = parseInt(level, 10);

    if (isNaN(idx) || idx < 0 || idx > 4) {
      alert("Nhập từ 0 đến 4");
      return;
    }

    let count = 0;
    const rows = document.querySelectorAll('tr, table, div');

    rows.forEach(row => {
      const radios = row.querySelectorAll('input[type="radio"]');
      if (radios.length === 5) {
        if (radios[idx] && !radios[idx].checked) {
          radios[idx].click();
          count++;
        }
      }
    });

    alert(`Đã xong lựa chọn [${idx}]!`);
  };

  document.body.appendChild(button);
})();
