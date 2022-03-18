const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const resultObj = { child: 0, adult: 0, senior: 0 };

  entrants.forEach((element) => {
    if (element.age < 18) {
      resultObj.child += 1;
    } else if (element.age === 18) {
      resultObj.adult += 1;
    } else {
      resultObj.senior += 1;
    }
  });

  return resultObj;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  let sum = 0;
  const visitants = countEntrants(entrants);
  sum += visitants.child * prices.child;
  sum += visitants.adult * prices.adult;
  sum += visitants.senior * prices.senior;
  return sum;
}

module.exports = { calculateEntry, countEntrants };
