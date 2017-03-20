// table.increments();
// table.integer('profile_id').references('profile.id').unsigned().onDelete('CASCADE');
// table.integer('tea_id').references('tea.id').unsigned().onDelete('CASCADE');
// table.string('category');
// table.text('suggestion');


exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE profile_suggestion RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('profile_suggestion').insert([
      {
        id: 1,
        profile_id: 3,
        tea_id: 5,
        category: 'Science',
        suggestion: 'I have done some research and you are wrong.'
      },
      {
        id: 2,
        profile_id: 2,
        tea_id: 1,
        category: 'Lore',
        suggestion: 'I too have done some research and you should update this thing.'
      },
      {
        id: 3,
        profile_id: 1,
        tea_id: 4,
        category: 'History',
        suggestion: 'I didn\'t do any research, but I think this should be changed.'
      }
      ]);
    });
};
