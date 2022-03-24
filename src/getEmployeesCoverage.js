const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getPeopleInfo(obj) {
  let employee = employees.find((emp) => emp.firstName === obj.name);
  if (!employee) employee = employees.find((emp) => emp.lastName === obj.name);

  const locationArray = [];
  const animalNameArray = [];

  employee.responsibleFor.forEach((element) => {
    locationArray.push(species.find((animal) => animal.id === element).location);
    animalNameArray.push(species.find((animal) => animal.id === element).name);
  });

  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: animalNameArray,
    locations: locationArray };
}

function getEmployeesCoverage(obj) {
  if (Object.prototype.hasOwnProperty.call(obj, 'name')) {
    return getPeopleInfo(obj);
  }
}

console.log(getEmployeesCoverage({ name: 'Strauss' }));

module.exports = getEmployeesCoverage;
