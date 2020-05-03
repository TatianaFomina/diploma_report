const user3 = {
  name: 'Elena',
  email: 'elena@example.com',
  address: {
    street: 'Lomonosova',
    building: '9',
  },
  roles: ['USER']
};
const user4 = {...@user3};
console.log(user3 === user4); // false
console.log(user3.address === user4.address); // false
console.log(user3.roles === user4.roles); // false
