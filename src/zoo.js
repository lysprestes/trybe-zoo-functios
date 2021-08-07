const { species, employees, prices } = require('./data');

const getSpeciesByIds = (...ids) => species.filter((animal) => ids.includes(animal.id));
// seu código aqui

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const olderThan = species.find((iten) =>
    iten.name === animal).residents.every((resident) =>
    resident.age >= age);
  return olderThan;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {}; // resumao do Leozin de como deixar as coisas curtinhas :D
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  // seu código aqui
  const newEmployee = { id, firstName, lastName, managers, responsibleFor };
  employees.push(newEmployee);
}

function countAnimals(spc) {
  // seu código aqui
  if (!spc) { // caso nao seja informado parametro algum, sera retornado o objeto com todos os animais e suas quantidades (chave e valor respectivamente)
    const spcCount = {};
    species.forEach((animal) => {
      spcCount[animal.name] = animal.residents.length; // adicionando nome e quantidade dos animais nesse objeto criaado
    });
    return spcCount;
  }
  return species.find(({ name }) => name === spc).residents.length; // ({ name }) esta desestruturando o objeto e retornando o valor do nome, pegando apenas esta chave e valor
  // outra forma de resolver: retun species.find((animal) => animal.name === spc).residents.length;))
}

function calculateEntry(entrants = 0) {
  // seu código aqui
  // function calculateEntry(entrants = 0) eh igual a if (!entrants) return 0;
  return Object.keys(entrants).reduce((acc, crr) => acc + entrants[crr] * prices[crr], 0); // Object.keys esta retornando um array com as chaves do objeto entrants
  // acc vai inicar com NUMERO zero, prevenindo que seja undefined
  // o crr vai somar o valor atual ao acc, para cada chave do entrants
}

function getAnimalMap(options) {
  // seu código aqui
  // pular por enquanto
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
