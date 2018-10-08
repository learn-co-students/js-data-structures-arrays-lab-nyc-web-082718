// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(){
  return drivers.push("Ralph")
}

function destructivelyPrependDriver(){
  return drivers.unshift("Bob")
}

function destructivelyRemoveLastDriver(){
  return drivers.pop()
}

function destructivelyRemoveFirstDriver(){
  return drivers.shift()
}

function appendDriver(name){
  return [...drivers, name]
}

function prependDriver(na){
  return [na, ...drivers]
}

function removeLastDriver(){
  return drivers.slice(0,2)
}

function removeFirstDriver(){
  return drivers.slice(1,3)
}
