// table.increments();
// table.string('first_name');
// table.string('last_name');
// table.string('email');
// table.string('username');
// table.string('password');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE profile RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('profile').insert([
        {
          id: 1,
          first_name: 'Mark',
          last_name: 'Grant',
          email: 'grant.mark@gmail.com',
          username: 'Omegamark',
          password: 'schnibidy'
        },
        {
          id: 2,
          first_name: 'Tyler',
          last_name: 'Briskie',
          email: 'briskie.tyler@gmail.com',
          username: 'Omegatyler',
          password: 'dibbidy'
        },
        {
          id: 3,
          first_name: 'Murph',
          last_name: 'Grainger',
          email: 'grainger.murph@gmail.com',
          username: 'Omegamurph',
          password: 'bibbidy'
        },
        {
          id: 4,
          first_name: 'Aaron',
          last_name: 'Goodman',
          email: 'goodman.aaron@gmail.com',
          username: 'Omegaaaron',
          password: 'flibbidy'
        }


      ]);
    });
};
