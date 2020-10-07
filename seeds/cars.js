
exports.seed = function(knex) {
  return knex('cardealer').truncate()
    .then( ()=> {
      // Inserts seed entries
       knex('cardealer').insert([
        {VIN:"27DBQLP93", make: "FORD", model: "Mustang", mileage:"54,000"}
      ]);
    });
};
