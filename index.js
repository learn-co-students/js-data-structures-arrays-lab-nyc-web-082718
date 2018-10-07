// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

let destructivelyAppendDriver = function(name) {
  drivers.push(name);
};

let destructivelyPrependDriver = function(name) {
  drivers.unshift(name);
};

let destructivelyRemoveLastDriver = function() {
  drivers.pop();
};

let destructivelyRemoveFirstDriver = function() {
  drivers.shift();
};

let appendDriver = function(name) {
  return [...drivers.slice(0), name];
};

let prependDriver = function(name) {
  return [name, ...drivers.slice(0)];
};

let removeLastDriver = function() {
  return drivers.slice(0, -1);
};

let removeFirstDriver = function() {
  return drivers.slice(1);
};
