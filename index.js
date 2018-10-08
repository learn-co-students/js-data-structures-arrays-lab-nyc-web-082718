// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function appendDriver(name){
  new_arr = [...drivers, name]
  return new_arr;
}

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver(name){
  drivers.pop(name);
}

function destructivelyRemoveFirstDriver(name){
  drivers.shift(name);
}

function prependDriver(name){
  new_arr = [name, ...drivers];
  return new_arr;
}

function removeLastDriver(name){
  new_arr = drivers.slice(0, drivers.length - 1);
  return new_arr;
}

function removeFirstDriver(name){
  new_arr = drivers.slice(1);
  return new_arr;
}
