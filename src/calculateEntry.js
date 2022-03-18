const data = require('../data/zoo_data');

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
  // seu código aqui
}

module.exports = { calculateEntry, countEntrants };
