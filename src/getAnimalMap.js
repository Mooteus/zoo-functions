const { species } = require('../data/zoo_data');

function getAnimalPerLocation(location) {
  const animalsName = [];
  const animals = species.filter((animal) => animal.location === location);
  animals.forEach((element) => {
    animalsName.push(element.name);
  });
  return animalsName;
}

function renderAllAnimalsObj() {
  return {
    NE: getAnimalPerLocation('NE'),
    NW: getAnimalPerLocation('NW'),
    SE: getAnimalPerLocation('SE'),
    SW: getAnimalPerLocation('SW'),
  };
}

function getAnimalNamePerRegion(location) {
  let objResult = {};
  const arrayResult = [];
  const animals = species.filter((animal) => animal.location === location);
  let animalArray = [];
  animals.forEach((element) => {
    element.residents.forEach((resident) => {
      animalArray.push(resident.name);
    });
    objResult[element.name] = animalArray;
    arrayResult.push(objResult);
    animalArray = [];
    objResult = {};
  });
  return arrayResult;
}

function getAnimalsPerName(sex, sort) {
  if (!sex && !sort) {
    return {
      NE: getAnimalNamePerRegion('NE'),
      NW: getAnimalNamePerRegion('NW'),
      SE: getAnimalNamePerRegion('SE'),
      SW: getAnimalNamePerRegion('SW'),
    };
  }
}

function getAnimalMap(options) {
  const objResult = renderAllAnimalsObj();
  if (!options) {
    return objResult;
  }
  const hasIncludeName = Object.prototype.hasOwnProperty.call(options, 'includeNames');
  if (!hasIncludeName) {
    return objResult;
  }
  return getAnimalsPerName(options.sex, options.sort);
}
console.log(getAnimalMap({ includeNames: true }));
module.exports = getAnimalMap;
