//-------------------------------------- CONCEPTOS BÁSICOS --------------------------------------

//----[ Datos primitivos y variables ]----

string = "cadena de texto";
number = 19;
boleano = true;



//----[ Declaracion de variables ]----

var numero = 15;
let numero = 14;

//Las constantes se inicializan cuando se declaran
const IVA = 21;



//----[ Datos undefined null y nan ]----

let numero;          // -- No tiene valor
let numero = null;   // -- Tiene un valor nulo ESTA DEFINIDO

let numero =2;
let numero2="siete";

alert(numero + numero2);  //Se concatena dando como resultado "2siete"
alert(numero * numero2);  //Arroja el valor NaN (NOT A NUMBER) porque no puede operar con String



//----[ Prompt ]----

prompt("hola que tal");  //Funcion que pide una variable al usuario

let nombre= prompt("Cual es tu nombre?"); //Se puede almacenar en una variable para poder usarla despues
alert("Hola " + nombre);





//-------------------------------------- OPERADORES --------------------------------------

//----[ Asignacion ]----

let numero = 10;
numero += 5;
document.write(numero);

numero *=5;
document.write(numero);

numero %= 4;
document.write(numero);



//----[ Aritmeticos ]----

let num1 = 10;
let num2 = 5;

resultado = num1--;
resultado = num1++;

resultado = num1 + num2;
resultado = num1 / num2;
resultado = num1 ** 2;    //Numero num1 al cuadrado
resultado = num1 ** 3;    //Numero num1 al cubo

resultado = num1 & num2;  //Resto de dividir num1 a num2

resultado = -num1;        //Pone un numero positivo a negativo





//-------------------------------------- CONCATENACION --------------------------------------
