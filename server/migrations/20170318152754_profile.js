
exports.up = function(knex, Promise) {
  return knex.schema.createTable('profile', function(table) {
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.string('email');
    table.string('username');
    table.string('password');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('profile');
};
