const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }

  const firstNameEmp = employees.find((first) => first.firstName === employeeName);
  const lastNameEmp = employees.find((last) => last.lastName === employeeName);

  if (firstNameEmp) {
    return firstNameEmp;
  }

  return lastNameEmp;
}
console.log(getEmployeeByName());

module.exports = getEmployeeByName;
