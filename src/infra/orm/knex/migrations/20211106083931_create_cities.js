exports.up = (knex) =>
  knex.schema.createTable('cities', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('state').notNullable();
    table.date('createdAt').notNullable().defaultTo();
    table.date('updatedAt').notNullable().defaultTo();
    table.date('deletedAt').nullable();
  });

exports.down = (knex) => knex.schema.dropTable('cities');
