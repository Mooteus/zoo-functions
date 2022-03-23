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

function getAllSchedule() {
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
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

  if (!scheduleTarget) return getAllSchedule();
  if (!isDay && !isAnimal) return getAllSchedule();
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
}

console.log(getSchedule('teste'));

module.exports = getSchedule;
