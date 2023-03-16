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

// This is to add accessibility to the pages
// by allowing the user to press the enter key to click on the hamburger button
document.onkeydown = (e) => {
  // The Enter/Return key
  if (e.key === 'control') {
    document.activeElement.click();
  }
};

// Content created dynamically
const topics = [
  {
    topicImage: './assets/img/featured-topics/1.png',
    alt: 'Business English',
    topicTitle: 'Business English',
    talkTime: 'Talk Time: 1h 30m',
    topicDescription: 'Learn French and take your life to the next level',
    number: 'num-0',
  },
  {
    topicImage: './assets/img/featured-topics/2.png',
    alt: 'French',
    topicTitle: 'French',
    talkTime: 'Talk Time: 2h 30m',
    topicDescription: 'Learn French and take your life to the next level',
    number: 'num-1',
  },
  {
    topicImage: './assets/img/featured-topics/3.png',
    alt: 'Chinese',
    topicTitle: 'Chinese',
    talkTime: 'Talk Time: 3h 30m',
    topicDescription: 'Learn Chinese and take your life to the next level',
    number: 'num-2',
  },
  {
    topicImage: './assets/img/featured-topics/4.png',
    alt: 'English',
    topicTitle: 'English',
    talkTime: 'Talk Time: 2h 30m',
    topicDescription: 'Learn English and take your life to the next level',
    number: 'num-3',
  },
  {
    topicImage: './assets/img/featured-topics/5.png',
    alt: 'Spanish',
    topicTitle: 'Spanish',
    talkTime: 'Talk Time: 1h 30m',
    topicDescription: 'Learn Spanish and take your life to the next level',
    number: 'num-4',
  },
  {
    topicImage: './assets/img/featured-topics/7.png',
    alt: 'Languages and technology',
    topicTitle: 'Languages and tech',
    talkTime: 'Talk Time: 1h 30m',
    topicDescription: 'Learn languages and take your life to the next level',
    number: 'num-5',
  },
];

const topicsContainer = document.querySelector('.section-three__container');

topics.forEach((topic) => {
  const card = document.createElement('div');
  card.classList.add('section-three__card');
  card.classList.add(topic.number);
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', topic.topicTitle);

  card.innerHTML = `
    <div class="card-img__container">
        <img class="section-three__card__img" src="${topic.topicImage}" alt="${topic.alt}">
    </div>
    <div class="section-three__card__text">
        <h3 class="section-three__card__title">${topic.topicTitle}</h3>
        <p class="section-three__card__time">${topic.talkTime}</p>
        <div class="card-divider"></div>
        <p class="section-three__card__description">${topic.topicDescription}</p>
    </div>
`;
  topicsContainer.appendChild(card);
});

// Show more and less button
const showMore = document.querySelector('.div-button__more');

showMore.addEventListener('click', () => {
  let isActive = false;

  topics.slice(1).forEach((_, index) => {
    const card = document.querySelector(`.num-${index + 1}`);

    if (card.classList.contains('active')) {
      isActive = true;
    }

    card.classList.toggle('active');
  });

  showMore.classList.toggle('btn-active');
  showMore.textContent = isActive ? 'MORE' : 'LESS';
});
