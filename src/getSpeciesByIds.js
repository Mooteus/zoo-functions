const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = [];

  ids.forEach((element) => {
    animals.push(species.find((animal) => animal.id === element));
  });
  return animals;
}

module.exports = getSpeciesByIds;
