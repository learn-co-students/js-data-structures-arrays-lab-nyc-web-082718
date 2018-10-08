// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

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
  const array = [...drivers, name];
  return array;
}

function prependDriver(name) {
  const newArray = [name, ...drivers];
  return newArray;
}

function removeLastDriver() {
  const result = drivers.slice(0, drivers.length-1);
  return result;
}

function removeFirstDriver() {
  const newResult = drivers.slice(1);
  return newResult;
}
