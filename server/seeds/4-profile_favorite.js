// table.increments();
// table.integer('profile_id').references('profile.id').unsigned().onDelete('CASCADE');
// table.integer('tea_id').references('tea.id').unsigned().onDelete('CASCADE');
// table.text('description');
// table.boolean('favorite');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE profile_favorite RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('profile_favorite').insert([
      {
        id: 1,
        profile_id: 3,
        tea_id: 5,
        description: 'I have my own opinions about this particular tea.',
        favorite: true
      },
      {
        id: 2,
        profile_id: 2,
        tea_id: 1,
        description: 'I too have my own opinions about this particular tea.',
        favorite: false
      },
      {
        id: 3,
        profile_id: 1,
        tea_id: 4,
        description: 'I also have my own opinions about this particular tea.',
        favorite: false
      }
      ]);
    });
};
