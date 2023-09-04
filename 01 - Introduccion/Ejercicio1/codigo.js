/*

EJERCICIO 1 :::  3 chicos entran a comprar un helado y quieren comprar el mas caro. 

 -Roberto tiene 1.5€ 
 -Pedro tiene 1.7€ 
 -Ana tiene 3€ 

Precio de helados:

 -Polo de agua: 0.6€
 -Polo de crema: 1€
 -Bombón helado X: 1.6€
 -Bombón helado Y: 1.7€
 -Bombón helado Z: 1.8€
 -Tarrina con topings: 2.9€
 -Tarrina : 2.9€

  a) Mostrar su dinero total y mostrar el helado mas caro
  b) Si hay 2 helados con el mismo precio mostrar los 2
  c) Saber las vueltas

*/


helado(dineroR = prompt("Cuanto dinero tienes ?"));
helado(dineroP = prompt("Cuanto dinero tienes ?"));
helado(dineroA = prompt("Cuanto dinero tienes ?"));


function helado(a){

a = parseInt(a);

if (a >= 0.6 && a < 1){
  alert("Compra el polo de agua");
  alert("Te sobran " + (a - 0.6));
}

else if (a >= 1 && a < 1.6){
  alert("Compra el polo de crema");
  alert("Te sobran " + (a - 1));
}

else if (a >= 1.6 && a < 1.7){
  alert("Compra el helado X");
  alert("Te sobran " + (a - 1.6));
}

else if (a >= 1.7 && a < 1.8){
  alert("Compra el helado Y");
  alert("Te sobran " + (a - 1.7));
}

else if (a >= 1.8 && a < 2.9){
  alert("Compra el helado Z");
  alert("Te sobran " + (a - 1.8));
}

else if (a >= 2.9 ){
  alert("Compra la tarrina normal o con topings");
  alert("Te sobran " + (a - 2.9));
}

else {
  alert("No tienes suficiente dinero para ningun helado");

}

}

