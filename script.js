'use strict';

let textEl = document.getElementById('text');
let paraEl = document.getElementById('para');


function init() {
    paraEl.innerHTML = null;
    textEl.value = null;
}
function heading_one() {
    paraEl.innerHTML = `<h1>${textEl.value}</h1>`;
}
function heading_two() {
    paraEl.innerHTML = `<h2>${textEl.value}</h2>`;
}
function heading_three() {
    paraEl.innerHTML = `<h3>${textEl.value}</h3>`;
}

clear.addEventListener('click', () => {
    init();
})