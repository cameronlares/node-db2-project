

exports.up = function(knex) {
    // the change we want to make to our schema
  
    return knex.schema.createTable('cardealer',tbl =>{
        tbl.increments();
        tbl.text('VIN', 128)
        .unique()
        .notNullable()
        .index();

        tbl.text('make')
        .notNullable()
        .index();

        tbl.text('model')
        .notNullable()
        .index();

        tbl.integer('mileage').index()


    })
  };
  
  exports.down = function(knex) {
    //undoing that change 
    return knex.schema.dropTableIfExists('cardealer')
  };
  


// The critical information for each car is the VIN, make, model, and mileage.
// They also track transmission type and status of the title (clean, salvage, etc.), but this information is not always immediately known.