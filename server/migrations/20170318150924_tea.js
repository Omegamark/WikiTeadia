
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tea', function(table) {
    table.increments();
    table.string('name');
    table.string('chinese_name');
    table.integer('tea_type_id').references('tea_type.id').unsigned().onDelete('CASCADE')
    table.text('description');
    table.text('flavor');
    table.text('science');
    table.text('process');
    table.text('history');
    table.text('lore');
    table.string('pic_url');
    table.float('lat');
    table.float('long');

  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('tea');
};
