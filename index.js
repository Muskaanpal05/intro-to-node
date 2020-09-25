const fs = require("fs"); //Importing file system module

fs.copyFileSync("text1.txt", "text2.txt"); // It will copy source file i.e text1 to destination file i.e text2

var sh = require("superheroes");

var mySuperHeroes = sh.random();

console.log(mySuperHeroes);

var sv = require("supervillains");

var mySuperVillains = sv.random();

console.log(mySuperVillains);