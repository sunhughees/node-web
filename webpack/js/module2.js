var _ = require('lodash.filter');

var users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred',   'age': 40, 'active': false }
];

// var activeUsers = _.filter(users, {'active': true});

var activeUsers = _(users, 'active');

console.log(activeUsers[0]);

