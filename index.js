const drivers = ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = (name) => {
  drivers.push(name);
  return drivers
}

const destructivelyPrependDriver = (name) => {
  drivers.unshift(name);
  return drivers
}

const destructivelyRemoveLastDriver = (name) => {
  drivers.pop(name);
  return drivers
}

const destructivelyRemoveFirstDriver = (name) => {
  drivers.shift(name);
  return drivers
}

function appendDriver (name) {
  return [...drivers, name];
}

function prependDriver (name) {
  return [name, ...drivers];
}

function removeFirstDriver () {
  return drivers.slice(1);
}

function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
}
