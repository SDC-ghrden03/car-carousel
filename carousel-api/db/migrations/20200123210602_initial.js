exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable('cars', function (table) {
      table.increments('id').primary();
      table.string('make');
      table.string('model');
      table.integer('year');
    }),
    knex.schema.createTable('images', function (table) {
      table.increments('id').primary();
      table.string('image');
      table.integer('car_id').unsigned();
      table.foreign('car_id')
        .references('cars.id');
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([
    knex.schema.dropTable('cars'),
    knex.schema.dropTable('images'),
  ]);
};
