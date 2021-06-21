const axios = require('axios');
// async function testPromis() {
//   let res = 'no promis';

//   res = await 'promis';

//   return res;
// }

// const test = testPromis();

// console.log(test);

async function test2(name) {
  const res = await name;
  return res;
}

async function c() {
  console.log('??');

  const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

  console.log(data);

  console.log('Dadadada');

  return 'World';
}

c();

test2('usman ghani').then((h) => console.log(h));
