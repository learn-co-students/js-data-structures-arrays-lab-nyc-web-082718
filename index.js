// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
    drivers.pop(name)
}

function destructivelyRemoveFirstDriver(name){
    drivers.shift(name)
}

function appendDriver(name){
  const array = [...drivers, name]
  return array
}

function prependDriver(name){
  const newDrivers = [name, ...drivers]
  return newDrivers
}

function removeLastDriver() {
    const last = drivers.slice(0, 2)
    return last
}

function removeFirstDriver() {
  const first = drivers.slice(1)
  return first
}
