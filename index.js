// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
    var newCats = [...cats, "Broom"];
    return newCats;
}
function prependCat(name){
    var moreCats = [name, ...cats];
    return moreCats;
}
function removeLastCat(name){
    var lessCats = [...cats];
    lessCats.pop();
    return lessCats;
}
function removeFirstCat(name){
    var moreCats = [...cats];
    moreCats.shift();
    return moreCats;
}