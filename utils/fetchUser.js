//
const url = 'https://randomuser.me/api/';

const fetchUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  const { cell: phone, email } = person;
  const { age } = person.dob;
  const { name: street, number: streetNumber } = person.location.street;
  const { first, last } = person.name;
  const { password } = person.login;
  return {
    name: `${first} ${last}`,
    email,
    age,
    street: `${streetNumber} ${street}`,
    phone,
    password,
  };
};

export default fetchUser;
