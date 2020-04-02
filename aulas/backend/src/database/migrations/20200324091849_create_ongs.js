
exports.up = function(knex) {
  return knex.schema.createTable('ongs',function(table){
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf',4).notNullable();
    table.string('password').notNullable();
});
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
