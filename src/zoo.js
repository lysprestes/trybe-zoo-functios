// {Tive ajuda do meu padrinho LeoDibre (Leonardo Diber T14A) com este projeto. Ele me explicou como utilizar as paradinhas que eu nao tinha conseguido enteder como aplicar na pratica.}
const {
  species,
  employees,
  prices,
  hours,
} = require('./data');

const getSpeciesByIds = (...ids) => species.filter((animal) => ids.includes(animal.id));
// seu código aqui
// ao inves de dar um return, resolvi colocar tudo dentro de uma const, sugestao de resolucao de uma linha do Lucas Farias T14A

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const olderThan = species.find((iten) => // retorna o primeiro animal que tenha a id igual a id do animal passado por parametro
    iten.name === animal).residents.every((resident) =>
    resident.age >= age); // retorna true se todos os animais da especie tiverem a id maior que a id do parametro
  return olderThan;
}

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {}; // resumao do Leozin de como deixar as coisas curtinhas :D
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName); // retorna o primeiro employee que tenha o nome ou sobrenome passados por parametro
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith,
  }; // essa é uma estrutura de dados que pode ser utilizada para criar um objeto
}

function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.includes(id)); // retorna true se um manager tenha a id passada por parametro
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) { // managers e responsibleFor sao arrays que podem ou nao ser passados por parametro
  // seu código aqui
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  }; // criando um objeto com os parametros passados
  employees.push(newEmployee); // adicionando o employee na lista de employees
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
  return species.find(({
    name,
  }) => name === spc).residents.length; // ({ name }) esta desestruturando o objeto e retornando o valor do nome, pegando apenas esta chave e valor
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
  const obj = {};
  if (!dayName) {
    Object.keys(hours).forEach((day) => { // Obj.key retorna o array com as chaves do objeto
      obj[day] = day !== 'Monday'
        ? `Open from ${hours[day].open}am until ${hours[day].close - 12}pm` : 'CLOSED';
      // verificando se nao eh segunda feira, retorna a mensagem se for true com operadores ternarios
    });
    return obj;
  }
  obj[dayName] = dayName !== 'Monday'
    ? `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm` : 'CLOSED';
  return obj;
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
