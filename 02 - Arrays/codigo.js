
//------ [ DEFINICION ARRAYS ] ------


let frutas = ["banana","manzana","mango"];
document.write("<br>"+frutas);



//------ [ ARRAYS ASOCIATIVOS ] ------


let pc = {
  usuario: "Juan",
  procesador: "i7",
  ram: "16GB",
  espacio: "1TB"
};

let usuario = pc["usuario"];
let procesador = pc["procesador"];
let ram = pc["ram"];
let espacio = pc["espacio"];


let frase = `<br>Usuario : ${usuario}. <br>
             Procesador : ${procesador}. <br>
             RAM : ${ram}. <br>
             Dicso: ${espacio}.<br>`

document.write(frase);



//------ [ WHILES ] ------


//WHILE ...........

let numero=0;

while (numero < 5){

    numero++;
    document.write(numero+"<br>");
};


while (numero < 1000000){

  numero++;
  document.write(numero+"<br>");

  if (numero == 10){
    break;     //brake para salir de bucles
  };
};



//DO WHILE ...........

 numero =0;
do{
  numero++;
  document.write(numero+"<br>");
}while (numero < 10);




//------ [ BUCLES FOR ] ------


//FOR ...........


for (let i =0;i<10;i++){
  
  if(i==5){
    continue;  // Con CONTINUE saltamos una iteracion y volvemos al bucle
  }
  document.write("<b>"+i+"</b><br>");
};


let array =["Juan","Pedro","Maria","Angel","Ramon","Lorena"];

for (let i =0;i<array.length;i++){
  document.write(array[i]+"<br>");
};



//FOR IN ...........

let mascotas = ["Gato","Perro","Loro","Tortuga","Pez"];

for (animal in mascotas){
  document.write("<strong>"+mascotas[animal]+"</strong><br>");  //Recorre y muestra el indice y posiciones. En objetos tambien coge las propiedades
}


//FOR OF ...........

for (animal of mascotas){
  document.write(animal+"<br>");  //Recorre el array y muestra el valor de todos los elementos
}


//LABEL ................

let array1 = ["Maria","Laura","Pepa"];
let array2 = ["Pedro",array1,"Ana"];

forNombre:  //esto es un label :: Se usa para manipular un bucle for específico
for (let array in array2){
  
  if(array == 1){
    for (let arr of array1){
      
      document.write(arr+"<br>")
      //continue forNombre;
      
    }
  }else{
    document.write(array2[array]+"<br>")
  }
}










//------ [ FUNCIONES ] ------


function saludar() {     //Definimos y declaramos la funcion

    let respuesta = prompt("Hola! Como estas?");

    if (respuesta == "bien"){
      alert("Estupendo");
    }else{
      alert("Lastima");
    }
}

document.write(saludar()+"<br>");   //Llamamos a la funcion. Como no tiene return devolverá UNDEFINED



//RETURN ................

function despedir() {               //Deficnimos y declaramos la funcion
  return "Adios!";                  //Al poner el return para de ejecutarse la funcion
  alert("Esto no se ejecutará");    //Esto no se ejecuta porque va después del return
}

document.write(despedir()+"<br>"); //Llamamos a la funcion



//PARAMETROS ................

let num = 32;
let num2= 12;

function suma(a,b){      //Una función puede recibir argumentos
  return a+b;
}

document.write(suma(10,5)+"<br>");        //Se le pasan parámetros para que funcione
document.write(suma(num,num2)+"<br>");    //Se pueden pasar variables   



//FUNCION FLECHA ................


const saludando = function(nombre) {                 
  document.write(`Hola ${nombre}! Que tal?<br>`);
}


const saludando2 = nombre => document.write(`Hola ${nombre}! Que tal?<br>`);   // La palabra function se cambia por => .
                                                                              // Si solo recoje 1 argumento no hace falta paréntesis.
                                                                              // Cuando hay 1 linea de codigo no hace falta {} y hace return automatico.
saludando("Pepe");
saludando2("Juan");






