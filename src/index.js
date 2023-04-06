
// Import stylesheets
import './style.scss';

// import tabs from '/tabs';
// import table from '/table.js';

const sec1 = document.querySelector('.sec1');
const sec2 = document.querySelector('.sec2');
const sec3 = document.querySelector('.sec3');
const sec4 = document.querySelector('.sec4');
const sec5 = document.querySelector('.sec5');
const sec6 = document.querySelector('.sec6');

const sections = document.querySelectorAll('section');

const btn = document.querySelectorAll('.btn');

const data = {
  currentSection: sec1,
  

};

btn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const targetClass = btn.dataset.target;

    const target = document.querySelector(`.${targetClass}`);

    // get bounds of target
    const targetBounds = target.getBoundingClientRect();

    console.log(targetBounds);

    // // get bounds
    // const nextBounds = sec2.getBoundingClientRect();

    // console.log(nextBounds);

    window.scrollTo({
      top: targetBounds.y + window.scrollY,
      behavior: 'smooth',
    });
  });
});

// add event listener for scroll event
window.addEventListener('scroll', (e) => {
  // loop through all sections and find the one that is currently visible
  for (const section of sections) {
    if (
      section.offsetTop <= window.pageYOffset &&
      section.offsetTop + section.offsetHeight > window.pageYOffset
    ) {
      data.currentSection = section;
    }
  }

  console.log(data.currentSection);
});

// add event listener for wheel event
window.addEventListener('wheel', (e) => {
  // get direction
  const deltaY = e.deltaY;
  const dir = Math.sign(deltaY);

  // convert to array and find index
  const secArr = Array.from(sections);
  const idx = secArr.indexOf(data.currentSection);

  // using direction find next section
  const nextIdx = idx + dir;

  // check for out of bounds sections
  if (nextIdx < 0 || nextIdx >= secArr.length) return;

  // get target dimensions and bounds
  const targetBounds = secArr[nextIdx].getBoundingClientRect();

  // scroll
  window.scrollTo({
    top: targetBounds.y + window.scrollY,
    behavior: 'smooth',
  });

  // TODO: disable event listener while animation is happening
  // TODO: replace window.scrollTo by translateY()
  // TODO: allow some sections to have scroll
});

function init() {}