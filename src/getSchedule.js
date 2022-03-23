const { hours } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getHours(days) {
  const objResult = {};
  species.forEach((element) => {
    days.forEach((day) => {
      if (hours[day].open === 0 && hours[day].close === 0) {
        objResult[day] = { officeHour: 'CLOSED' };
        objResult[day].exhibition = 'The zoo will be closed!';
      } else {
        objResult[day] = {
          officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm` };
      }
    });
  });
  return objResult;
}

function getAnimalSchedule(string) {
  const animal = species.find((animals) => animals.name === string);
  return animal.availability;
}

function getDays(string) {
  let days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  if (string) days = [string];
  return days;
}

function getAllSchedule(string) {
  const days = getDays(string);
  const objResult = getHours(days);
  let availabilityArray = [];

  days.forEach((day) => {
    species.forEach((element) => {
      if (element.availability.some((avail) => avail === day)) {
        availabilityArray.push(element.name);
      }
    });
    if (!objResult[day].exhibition) objResult[day].exhibition = availabilityArray;
    availabilityArray = [];
  });

  return objResult;
}

function getSchedule(scheduleTarget) {
  const days = Object.keys(hours);
  const isDay = days.some((day) => day === scheduleTarget);
  const isAnimal = species.some((animal) => animal.name === scheduleTarget);

  if (!isDay && !isAnimal) return getAllSchedule();
  if (isAnimal) return getAnimalSchedule(scheduleTarget);
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return getAllSchedule(scheduleTarget);
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
