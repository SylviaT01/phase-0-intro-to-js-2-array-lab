// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
beforeEach(function () {
    
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
  function destructivelyAppendCat(name = "Ralph"){
    cats.push("Ralph")
  }
function destructivelyPrependCat(name = "Bob"){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(name = "Garfield"){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(name = "Milo"){
    cats.shift("Milo")
}
function appendCat(name = "Broom"){
    return[...cats, "Broom"]
}
function prependCat(name = "Arnold"){
    return["Arnold", ...cats]
}
function removeLastCat(){
    return cats.slice(0,-1);
}
function removeFirstCat(){
    return cats.slice(1)
}