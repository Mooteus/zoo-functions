const { species } = require('../data/zoo_data');

function getAnimalPerLocation(location) {
  const animalsName = [];
  const animals = species.filter((animal) => animal.location === location);
  animals.forEach((element) => {
    animalsName.push(element.name);
  });
  return animalsName;
}

function getAnimalMap(options) {
  const objResult = {
    NE: getAnimalPerLocation('NE'),
    NW: getAnimalPerLocation('NW'),
    SE: getAnimalPerLocation('SE'),
    SW: getAnimalPerLocation('SW'),
  };
  if (!options) {
    return objResult;
  }
  const hasIncludeNames = Object.prototype.hasOwnProperty.call(options, 'includeNames');
  if (!hasIncludeNames) {
    return objResult;
  }
}
console.log(getAnimalMap());
module.exports = getAnimalMap;
