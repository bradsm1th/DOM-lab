console.log("Hello from the DOM lab!");

// ***********************
// how to grab *one* element
// ***********************

// one way
let titleEl = document.getElementById("title");
// console.dir(titleEl);

// another way
titleEl = document.querySelector('.main-title');

// another way
titleEl = document.querySelector('body > h1');
console.log(titleEl);


let pEl = document.querySelector('.cool');

console.log(pEl);

// modify the DOM
// pEl.innerText = "Comments for <strong>today</strong>";
pEl.innerHTML = "Comments for <strong>today</strong>";
pEl.style.color = 'slategray';

let googleLink = document.querySelector('#google');
googleLink.setAttribute('href', 'https://www.google.com');

let commentEls = document.querySelectorAll('#comments li');
console.log(commentEls);
commentEls.forEach((li, idx) => {
  // console.log(`${idx}: ${li.innerText}`);
  console.log(li);
})

commentEls.forEach(li => {
  li.style.fontSize = '2em';
})