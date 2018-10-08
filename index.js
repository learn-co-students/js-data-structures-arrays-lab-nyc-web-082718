// Write your solution here!
const drivers = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendDriver(name) {
  drivers.push(name)
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  let newDrivers = [...drivers, name]
  return newDrivers
}

function prependDriver(name) {
  let newDrivers = [name, ...drivers]
  return newDrivers
}

function removeLastDriver() {
  let newDrivers = [...drivers]
  newDrivers.pop()
  return newDrivers
}

function removeFirstDriver() {
  let newDrivers = [...drivers]
  newDrivers.shift()
  return newDrivers
}
