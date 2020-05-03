const user1 = {
  name: 'Alex',
  email: 'alex@example.com',
  address: {
    street: 'Kronverksky pr.',
    building: '49',
  },
  roles: ['USER', 'ADMIN']
};
const user2 = {...user1};
console.log(user1 === user2); // false
console.log(user1.address === user2.address); // true
console.log(user1.roles === user2.roles); // true

