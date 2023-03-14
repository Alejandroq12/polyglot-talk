const hamburgerBtn = document.querySelector('#hamburger-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-button');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active'); // toggle active class on hamburger button
  mobileMenu.classList.toggle('show'); // toggle show class on mobile menu
});

closeBtn.addEventListener('click', () => {
  hamburgerBtn.classList.remove('active'); // remove active class from hamburger button
  mobileMenu.classList.remove('show'); // remove show class from mobile menu
});

document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === 'control') {
    document.activeElement.click();
  }
};
