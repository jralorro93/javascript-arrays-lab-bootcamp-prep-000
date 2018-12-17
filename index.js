var kittens = ["Milo", "Otis", "Garfield"] 

// Add your functions and code here
function destructivelyAppendKitten(name) {
  kittens.push("Ralph");
  return name;
}

function destructivelyPrependKitten(name) {
  kittens.unshift("Bob");
  return name;
}

function destructivelyRemoveLastKitten(name) {
  kittens.pop();
  return name;
}

function destructivelyRemoveFirstKitten(name) {
  kittens.shift();
  return name;
}

function appendKitten(name){
  var newName = ("Broom")
  console.log(kittens.concat(newName);
  return name;
}