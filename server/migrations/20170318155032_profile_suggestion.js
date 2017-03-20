
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile_suggestion', function(table) {
    table.increments();
    table.integer('profile_id').references('profile.id').unsigned().onDelete('CASCADE');
    table.integer('tea_id').references('tea.id').unsigned().onDelete('CASCADE');
    table.string('category');
    table.text('suggestion');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profile_suggestion');
};
