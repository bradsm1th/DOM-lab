console.log("Hello from the DOM lab!");

// Menu data structure (Task 3.0);
const menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

// …part of 5.1 (global variable)
let showingSubMenu = false;

// Task 1.0
const mainEl = document.querySelector('main');

// Task 1.1
mainEl.style.backgroundColor = 'var(--main-bg)';

// Task 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

// Tasks 1.3
mainEl.classList.add('flex-ctr');
// or
// mainEl.setAttribute('class', 'flex-ctr');



// Task 2.0
const topMenuEl = document.querySelector('#top-menu');

// Task 2.1
topMenuEl.setAttribute('height', '100%');

// Task 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

// Task 2.3
// topMenuEl.setAttribute('class', 'flex-around');
// or
topMenuEl.classList.add('flex-around');



// Task 3.1
menuLinks.forEach(menuItem => {
  let newEl = document.createElement('a');
  newEl.setAttribute('href', menuItem.href);
  newEl.innerText = menuItem.text;
  // newEl.textContent = menuItem.text;
  // newEl.innerHTML = menuItem.text;
  // console.log(newEl);
  topMenuEl.append(newEl);
});



// Task 4.0
const subMenuEl = document.querySelector('#sub-menu');

// 4.1
// subMenuEl.style.height = '100%';
// OR
subMenuEl.style.setProperty('height', '100%');
// console.log(subMenuEl.getAttribute('height'));

// 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// console.log(subMenuEl.getAttribute('style'));

// 4.3
subMenuEl.classList.add('flex-around');

// 4.4
subMenuEl.style.setProperty('position', 'absolute');

// 4.5
subMenuEl.style.setProperty('top', '0');



// 5.0
// [done in line 4]

// 5.1 [partial...the global variable is up top]
const topMenuLinks = document.querySelectorAll('#top-menu a');

// 5.2
topMenuEl.addEventListener('click', e => {
  e.preventDefault();
  if (e.target.tagName !== 'A') { return };
  // console.log(e.target.textContent);
  // console.log(e.target.innerText);
  // console.log(e.target.outerText);
  // console.log(e.target.innerHTML);
  // console.log(e.target.outerHTML);

  // 5.3 (part of event listener)
  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.setProperty('top', '0');
    return;
  }

  // 5.4 (part of event listener)
  topMenuLinks.forEach(anchorEl => {
    anchorEl.classList.remove('active');
  })

  // 5.5 (part of event listener)
  e.target.classList.add('active');

  // 5.6 (part of event listener)
  const thatHref = e.target.innerHTML;
  // console.log(thatHref);
  // console.log(menuLinks[2].text);

  const theLink = menuLinks.find(el => el.text === thatHref);
  console.log(theLink);
  if (theLink.subLinks) {
    showingSubMenu = true;
    // 5.7
    buildSubMenu(theLink.subLinks);
    subMenuEl.style.setProperty('top', '100%');
  } else {
    showingSubMenu = false;
    subMenuEl.style.setProperty('top', '0');
    mainEl.innerHTML = "<h1>about</h1>";
  }

  // 5.8 still part of event listener
  function buildSubMenu(array) {
    subMenuEl.innerHTML = '';
    array.forEach(link => {
      const anchorEl = document.createElement('a');
      anchorEl.setAttribute('href', link.href);
      anchorEl.innerHTML = link.text;
      subMenuEl.appendChild(anchorEl);
      // console.log(link.href);
    })
  }

})

// 6.0
subMenuEl.addEventListener('click', (e) => {
  e.preventDefault();
  if (e.target.tagName !== "A") { 
    return;
  }
  console.log(subMenuEl.style);

  // 6.1
  showingSubMenu = false;
  subMenuEl.style.setProperty('top', '0');

  // 6.2
  topMenuLinks.forEach(link => {
    link.classList.remove('active');
  })

  // 6.3
  console.log(mainEl);
  mainEl.innerHTML = `<h1>${e.target.innerHTML}</h1>`;
})