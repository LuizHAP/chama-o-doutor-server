import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('answers', table => {
        table.increments('id').primary();
        table.string('id_quiz').notNullable();
        table.string('nomeColaborador').notNullable();
        table.string('candPrefeito').notNullable();
        table.string('governoKiko').notNullable();
        table.string('candPrefKiko').notNullable();
        table.string('querConhecer');
        table.string('candidatosKiko');
        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable();
    })
}

export async function down(knex: Knex) {
    // Utilizado caso de algo de errado
    return knex.schema.dropTable('answers');
}