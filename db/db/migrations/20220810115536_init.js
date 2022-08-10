/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
    return knex.schema
        .createTable('students', table => {
            table.increments('id');
            table.string('first_name', 255).notNullable();
            table.string('last_name', 255).notNullable();
        })
        .createTable('books', table => {
            table.increments('id');
            table.string('name', 255).notNullable();
            table.string('author', 255).notNullable();
            table.string('borrowedBy', 255);
            table.date('borrowDate');
            table.date('expectedReturnDate');
            table.timestamps(true, true);
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
    return knex.schema
        .dropTable('students')
        .dropTable('books')

};
