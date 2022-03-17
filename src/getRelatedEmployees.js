const { employees } = require('../data/zoo_data');

function isManager(id) {
  const managersArray = [];
  employees.forEach((element) => {
    managersArray.push(...element.managers);
  });
  if (managersArray.find((people) => people === id)) return true;
  return false;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
}

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
