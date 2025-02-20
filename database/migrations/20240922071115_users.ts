import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<Knex.SchemaBuilder> {
    return knex.schema.createTable('users', (table) => {
        table.increments('id');
        table.string('first_name');
        table.string('last_name');
        table.string('gender');
        table.string('chat_id').unique();
        table.enum('status', ['kicked', 'member']).defaultTo('member');
        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<Knex.SchemaBuilder> {
    return knex.schema.dropTable('users');
}
