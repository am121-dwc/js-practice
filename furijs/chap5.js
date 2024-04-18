// let elem = document.querySelector('p');
// elem.innerText = 'JavaScriptで書く';

let ipt = document.querySelector
('input');
// click
let btn = document.querySelector
('button');

let elem = document.querySelector('p');
// click detection
btn.addEventListener('click',() => {
  elem.innerText = ipt.value;
});


