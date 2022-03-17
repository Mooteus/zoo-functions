const { species } = require('../data/zoo_data');

function searchAnimalsPerName(animal) {
  return species.find((animalName) => animalName.name === animal).residents.length;
}

function searchAnimalPerNameAndSex(animal, sex) {
  const animalResident = species.find((animalName) => animalName.name === animal).residents;
  let count = 0;
  animalResident.forEach((element) => {
    if (element.sex === sex) {
      count += 1;
    }
  });
  return count;
}

function countAnimals(animal) {
  const animalCount = {};

  if (!animal) {
    species.forEach((element) => {
      animalCount[element.name] = element.residents.length;
    });
    return animalCount;
  }

  if (!animal.sex) {
    return searchAnimalsPerName(animal.specie);
  }

  return searchAnimalPerNameAndSex(animal.specie, animal.sex);
}

console.log(countAnimals({ specie: 'bears', sex: 'male' }));

module.exports = countAnimals;
