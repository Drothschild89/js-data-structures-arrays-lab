// Write your solution here!

let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    return drivers.push('Ralph');
}

function destructivelyPrependDriver(name){
    return drivers.unshift('Bob')
}

function destructivelyRemoveLastDriver(){
    return drivers.pop()
}

function destructivelyRemoveFirstDriver(){
    return drivers.shift()
}

function appendDriver(name){
    return [...drivers, name];
}

function prependDriver(name){
    return [name, ...drivers];
}

function removeLastDriver(){
    return drivers.slice(0, 2)
}

function removeFirstDriver(){
    return drivers.slice(1)
}