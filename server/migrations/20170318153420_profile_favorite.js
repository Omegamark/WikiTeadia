
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile_favorite', function(table) {
    table.increments();
    table.integer('profile_id').references('profile.id').unsigned().onDelete('cascade');
    table.integer('tea_id').references('tea.id').unsigned().onDelete('cascade');
    table.text('description');
    table.boolean('favorite');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profile_favorite');
};
