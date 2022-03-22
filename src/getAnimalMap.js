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

function getAllAnimalName(location, sort) {
  let objResult = {};
  let animalArray = [];
  const arrayResult = [];
  const animals = species.filter((animal) => animal.location === location);

  animals.forEach((element) => {
    element.residents.forEach((resident) => {
      animalArray.push(resident.name);
    });

    if (sort) animalArray.sort();

    objResult[element.name] = animalArray;
    arrayResult.push(objResult);
    animalArray = [];
    objResult = {};
  });
  return arrayResult;
}

function getAnimalNamePerSex(location, sex) {
  let objResult = {};
  let animalArray = [];
  const arrayResult = [];
  const animals = species.filter((animal) => animal.location === location);

  animals.forEach((element) => {
    element.residents.forEach((resident) => {
      if (resident.sex === sex) animalArray.push(resident.name);
    });

    objResult[element.name] = animalArray;
    arrayResult.push(objResult);
    animalArray = [];
    objResult = {};
  });
  return arrayResult;
}

function getAnimalNamePerRegion(location, sex, sort) {
  if (!sex) return getAllAnimalName(location, sort);
  return getAnimalNamePerSex(location, sex);
}

function getAnimalsPerName(sex, sort) {
  return {
    NE: getAnimalNamePerRegion('NE', sex, sort),
    NW: getAnimalNamePerRegion('NW', sex, sort),
    SE: getAnimalNamePerRegion('SE', sex, sort),
    SW: getAnimalNamePerRegion('SW', sex, sort),
  };
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
  return getAnimalsPerName(options.sex, options.sorted);
}
console.log(getAnimalMap({ includeNames: true, sex: 'female' }));
module.exports = getAnimalMap;
