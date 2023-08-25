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




//----[ Comparación ]----

let nume1 = 2;
let nume2 = 3;
let texto = "2";


document.write(nume1 == nume2);   //Igual que: devuelve un booleano, en este caso false
document.write(nume1 != nume2);   //Distinto que: devuelve un booleano, en este caso true

document.write(nume1 === texto);  //Estrictamente igual: tambien compara si son el mismo tipo. Devuelve un booleano, en este caso false




//----[ Lógicos ]----

let valor1 = true;
let valor2 = true;


resultado = valor1 && valor2;      //AND : si las 2 conciones se cumplen es true
resultado = valor1 || valor2;      //OR : si 1 de las conciones se cumplen es true

document.write(!valor1);           //NOT : cambia el booleano al contrario





//-------------------------------------- CONCATENACION --------------------------------------


num1 = 5;
num2 = 4;

concatenacion = num1+num2;          //Da como resultado 9
concatenacion = ""+num1+num2;       //Forzamos un string con "" y el resultado es la concatenacion: 54
concatenacion = num1.concat(num2);  //Este método solo funciona con Strings. Aqui daria error

nombre = "Carlos"
frase = `Me llamo ${nombre}`;  //Se puede concatenar integrando una variable con ${}. Obligatorio usar comillas ``

frase = 'Comillas "simples" para poder usar dobles';   //Para poner comillas simples se usan las comillas simples y viceversa





//-------------------------------------- CONDICIONALES --------------------------------------

let numerico = 10;



if (numerico == 5) {
  alert("El numerico es 5");
} 

else if (numerico == 8){
  alert("El numerico es 8");
}

else {
  alert("El numerico es 10");
}






