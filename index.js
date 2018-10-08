// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  let newDriver = [...drivers];
  newDriver.push(name);
  return newDriver;
}

function prependDriver(name) {
  let newDriver = [...drivers];
  newDriver.unshift(name);
  return newDriver;
}

function removeLastDriver() {
  let newDriver = [...drivers]
  newDriver.pop()
  return newDriver
}

function removeFirstDriver() {
  let newDriver = [...drivers]
  newDriver.shift()
  return newDriver
}
