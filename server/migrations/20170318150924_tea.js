
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tea', function(table) {
    table.increments();
    table.string('name');
    table.string('chinese_name');
    table.text('description');
    table.text('science');
    table.text('process');
    table.text('history');
    table.text('lore');
    table.float('lat');
    table.float('long');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tea');
};
