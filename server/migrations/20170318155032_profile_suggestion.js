
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile_suggestions', function(table) {
    table.increments();
    table.integer('profile_id').references('profile.id');
    table.integer('tea_id').references('tea.id');
    table.string('category');
    table.text('suggestion');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profile_suggestions');
};
