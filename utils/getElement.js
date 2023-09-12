function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(`"${selection}" does not exist`);
  }
}

export default getElement;
