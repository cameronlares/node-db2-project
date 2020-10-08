
exports.up = function(knex) {
    return knex.schema.createTable('sales',tbl =>{
        tbl.increments();
        tbl
        .integer("id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("cardealer")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    tbl.string("description", 128).notNullable();
    tbl.text("notes").notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales')

};


// return knex.schema.createTable('sales', sales => {
//     sales.increments();
//     sales
//         .integer("car_id")
//         .unsigned()
//         .notNullable()
//         .references("id")
//         .inTable("cars")
//         .onDelete("CASCADE")
//         .onUpdate("CASCADE");
//     sales.string("description", 128).notNullable();
//     sales.text("notes").notNullable();