// ==UserScript==
// @name         HUST Survey Auto-Fill Tool
// @namespace    https://github.com/whooslizi
// @version      1.0.2
// @description  Tu dong dien khao sat danh gia hoc phan HUST
// @author       whooslizi
// @match        https://ctt-daotao.hust.edu.vn/*
// @match        https://ctt-sis.hust.edu.vn/*
// @match        https://*.hust.edu.vn/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const button = document.createElement('button');
  button.innerText = 'Survey Autofill';
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

  button.onmouseover = () => {
    button.style.backgroundColor = '#a0182e';
  };
  button.onmouseout = () => {
    button.style.backgroundColor = '#c41e3a';
  };

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
      alert("Nhập từ 0 đến 4!");
      return;
    }

    let count = 0;

    const radios = document.querySelectorAll('input[type="radio"]');
    if (radios.length > 0) {
      const radioGroups = {};
      radios.forEach(radio => {
        const name = radio.name || radio.getAttribute('name');
        if (name) {
          if (!radioGroups[name]) radioGroups[name] = [];
          radioGroups[name].push(radio);
        }
      });

      Object.values(radioGroups).forEach(group => {
        if (group.length === 5 && group[idx]) {
          group[idx].click();
          count++;
        }
      });
    }

    if (count === 0) {
      const prefixes = [`${idx}:`, `${idx}.`];
      const elements = document.querySelectorAll('label, td, span, div');

      elements.forEach(el => {
        const text = el.innerText ? el.innerText.trim() : '';
        const matchesPrefix = prefixes.some(p => text.startsWith(p));

        if (matchesPrefix) {
          const input = el.querySelector('input[type="radio"]') || el;
          input.click();
          count++;
        }
      });
    }

    alert(`Đã chọn mức [${idx}] cho ${count} lựa chọn!`);
  };

  document.body.appendChild(button);
})();
