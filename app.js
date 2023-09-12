//
import get from './utils/getElement.js';
import fetchUser from './utils/fetchUser.js';

const image = get('.image');
const btn = get('.btn');

const displayUser = (person) => {
  console.log(person);
};

const showUser = async () => {
  const data = await fetchUser();
  displayUser(data);
};

window.addEventListener('DOMContentLoaded', showUser);
btn.addEventListener('click', showUser);
