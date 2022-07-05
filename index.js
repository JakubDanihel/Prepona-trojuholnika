/*
 * program na vyratanie prepony trojuholnika
 * c^2=a^2+b^2
 * dve variacie programu:
 *      1. najprv cez vyskakovacie okna
 *      2. potom uzivatel moze vkladat data cez html okno
 */

let a;
let b;
let c;

//zadanie stran cez vyskakovacie okna

//ak je comment ako (/* tu je kod */) - kod sa spusti
//ak je kod zakomentovany ako (// tu je kod) - kod sa nespusti 

//strana A
//a = window.prompt("Zadaj stranu A: ");
//a = Number(a);

//strana B
//b = window.prompt("Zadaj stranu B: ");
//b = Number(b);

//strana C
//c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
//console.log(c);


//zadefinovanie vstupu cez html okno

document.getElementById("submit").onclick = function() {

    a = document.getElementById("AText").value;
    a = Number(a);

    b = document.getElementById("BText").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = "Strana C: " + c;
};
