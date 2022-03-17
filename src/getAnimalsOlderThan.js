const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalSelected = species.find((name) => name.name === animal);
  const animalResidents = animalSelected.residents;

  return animalResidents.every((animalAge) => animalAge.age >= age);
}

module.exports = getAnimalsOlderThan;
