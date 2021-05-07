// ==UserScript==
// @name         google-notranslate
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        *://**/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    /* 让所有的 pre、h、a 元素内的内容不被翻译*/
    var pres = document.getElementsByTagName('pre');
    var h1s = document.getElementsByTagName('h1');
    var h2s = document.getElementsByTagName('h2');
    // var h3s = document.getElementsByTagName('h3');
    var lis = document.getElementsByTagName('li');
    var as = document.getElementsByTagName('a');
    var tables = document.getElementsByTagName('table');
    if (pres) {
        for (let i = 0; i < pres.length; i++) {
            pres[i].classList.add('notranslate');
        }
    }

    if (h1s) {
        for (let i = 0; i < h1s.length; i++) {
            h1s[i].classList.add('notranslate');
        }
    }

    if (h2s) {
        for (let i = 0; i < h2s.length; i++) {
            h2s[i].classList.add('notranslate');
        }
    }
    /*
    if (h3s) {
        for (let i = 0; i < h3s.length; i++) {
            h3s[i].classList.add('notranslate');
        }
    }
    */
    if (as) {
        for (let i = 0; i < as.length; i++) {
            as[i].classList.add('notranslate');
        }
    }
    if (lis) {
        for (let i = 0; i < lis.length; i++) {
            lis[i].classList.add('notranslate');
        }
    }
    if (tables) {
        for (let i = 0; i < tables.length; i++) {
            tables[i].classList.add('notranslate');
        }
    }
})();
