const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = employees.find((emp) => emp.id === id);
  const animalId = employee.responsibleFor[0];
  const animals = species.find((animal) => animal.id === animalId);

  let animalAge = animals.residents[0].age;
  let animalOld = animals.residents[0].name;
  let animalSex = animals.residents[0].sex;

  animals.residents.forEach((element) => {
    if (animalAge < element.age) {
      animalAge = element.age;
      animalOld = element.name;
      animalSex = element.sex;
    }
  });

  return [animalOld, animalSex, animalAge];
}

module.exports = getOldestFromFirstSpecies;
