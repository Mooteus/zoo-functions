const { employees } = require('../data/zoo_data');

function isManager(id) {
  const managersArray = [];

  employees.forEach((element) => {
    managersArray.push(...element.managers);
  });

  if (managersArray.find((people) => people === id)) return true;
  return false;
}
// refatorar Depois
function searchRelatedEmployees(managerId) {
  const peopleName = [];
  employees.forEach((element) => {
    if (element.managers[0] === managerId || element.managers[1] === managerId) {
      peopleName.push(`${element.firstName} ${element.lastName}`);
    }
  });
  return peopleName;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return searchRelatedEmployees(managerId);
  }
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
