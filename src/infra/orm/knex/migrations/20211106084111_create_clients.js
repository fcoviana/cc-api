exports.up = (knex) =>
  knex.schema.createTable('clients', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('gender').notNullable();
    table.date('birthDate').notNullable();
    table.integer('age').notNullable();
    table.uuid('cityId').notNullable();
    table.string('state').notNullable();
    table.date('createdAt').notNullable().defaultTo();
    table.date('updatedAt').notNullable().defaultTo();
    table.date('deletedAt').nullable();
  });

exports.down = (knex) => knex.schema.dropTable('clients');
