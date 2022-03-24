const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalLocation(responsibleFor) {
  const locationArray = [];
  responsibleFor.forEach((resp) => {
    locationArray.push(species.find((animal) => animal.id === resp).location);
  });
  return locationArray;
}

function getAnimalName(responsibleFor) {
  const animalNameArray = [];
  responsibleFor.forEach((resp) => {
    animalNameArray.push(species.find((animal) => animal.id === resp).name);
  });
  return animalNameArray;
}

function getPeopleInfo(obj) {
  let employee = employees.find((emp) => emp.firstName === obj.name);
  if (!employee) employee = employees.find((emp) => emp.lastName === obj.name);
  if (!employee) employee = employees.find((emp) => emp.id === obj.id);
  if (!employee) throw new Error('Informações inválidas');

  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: getAnimalName(employee.responsibleFor),
    locations: getAnimalLocation(employee.responsibleFor) };
}

function getAllPeopleInfo() {
  let objResult = {};
  const arrayResult = [];

  employees.forEach((element) => {
    objResult.id = element.id;
    objResult.fullName = `${element.firstName} ${element.lastName}`;
    objResult.species = getAnimalName(element.responsibleFor);
    objResult.locations = getAnimalLocation(element.responsibleFor);
    arrayResult.push(objResult);
    objResult = {};
  });
  return arrayResult;
}

function getEmployeesCoverage(obj) {
  if (!obj) {
    return getAllPeopleInfo();
  }
  return getPeopleInfo(obj);
}

module.exports = getEmployeesCoverage;
