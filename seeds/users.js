
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'john doe',
          email: 'johndoe@gmail.com',
          username: 'johndoe43',
          password:'doeman'
        },
        {
          name: 'jane doe',
          email: 'janedoe@gmail.com',
          username: 'janedoe43',
          password: 'janewoman'
        }
      ]);
    });
};
