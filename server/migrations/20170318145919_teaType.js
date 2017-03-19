
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tea_type', function(table) {
    table.increments();
    table.string('type');
    table.string('chinese_name');
    table.text('description');
    table.text('health_benefits');
    table.text('science');
    table.text('process');
    table.text('history');
    table.text('lore');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tea_type');
};
