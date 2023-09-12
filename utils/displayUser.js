//
import get from './getElement.js';
const image = get('.image');
const title = get('.title');
const value = get('.value');
const btns = [...document.querySelectorAll('.icon')];

const displayUser = (person) => {
  image.src = person.image;
  title.textContent = `My name is`;
  value.textContent = person.name;
  btns.forEach((btn) => {
    btn.classList.remove('active');
  });
  btns[0].classList.add('active');
  btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const label = e.currentTarget.dataset.label;
      title.textContent = `My ${label} is`;
      value.textContent = person[label];
      btns.forEach((btn) => {
        btn.classList.remove('active');
      });
      btn.classList.add('active');
    });
  });
};

export default displayUser;
