const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = [];

  if (!ids) {
    return animals;
  }

  if (typeof ids === 'string') {
    animals.push(species.find((animal) => animal.id === ids));
    return animals;
  }

  ids.forEach((element) => {
    animals.push(species.find((animal) => animal.id === element));
  });
  return animals;
}

// console.log(getSpeciesByIds(['0938aa23-f153-4937-9f88-4858b24d6bce']));

module.exports = getSpeciesByIds;
