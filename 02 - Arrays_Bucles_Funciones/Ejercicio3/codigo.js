/*

Crear una calculadora con operacionas básicas

*/


const suma = (a,b) => a+b;
const resta = (a,b) => a-b;
const mult = (a,b) => a*b;
const div = (a,b) => {
  if (b!=0) a/b;
  else document.write("No puedes dividir por 0.");
};

let num1 = parseInt(prompt("Introduce el primer numero"));
let num2 = parseInt(prompt("Introduce el segundo numero"));
let elec = parseInt(prompt("1.Sumar // 2.restar // 3.Multiplicar // 4.Dividir"));


  switch (elec) {
    case 1:
      document.write(`La suma de ${num1} + ${num2} es: ${suma(num1,num2)}`) 
      break;
    case 2:
      document.write(`La resta de ${num1} - ${num2} es: ${resta(num1,num2)}`) 
      break;
    case 3: 
     document.write(`La multiplicacion de ${num1} * ${num2} es: ${mult(num1,num2)}`) 
      break;
    case 4:
      document.write(`La division de ${num1} / ${num2} es: ${div(num1,num2)}`) 
      break;
    default:
      document.write("Operacion no valida.")
      break;
  }




