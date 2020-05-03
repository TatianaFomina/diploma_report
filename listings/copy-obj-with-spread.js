const user1 = {
  name: 'Alex',
  email: 'alex@example.com',
  address: {
    street: 'Kronverksky pr.',
    building: '49',
  }
};
const user2 = {...user1};
console.log(user1 === user2); // false
console.log(user1.address === user2.address); // true
