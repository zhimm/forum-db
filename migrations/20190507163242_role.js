
exports.up = function(knex, Promise) {
    return knex.schema.createTable('role', (table) =>{
        table.increments()
        table.text('name')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('role')
};
