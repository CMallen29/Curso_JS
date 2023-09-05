/*

Pepe celebra una fiesta porque le ha tocado la loteria, pero al local no puede entrar cualquiera:

    -Solo pueden pasar mayores de edad
    -La primera persona que entre despues de las 2 no paga.

*/

let entradaGratis = false;

const validarCliente = (hora) => {

    let edad = prompt("Cual es tu edad?");

    if (edad > 18){
        if (hora >= 2 && hora < 8 && entradaGratis != true){
            alert(`Son las ${hora}. Puedes pasar grartis !!`);
            entradaGratis = true;
        }else{
            alert(`Son las ${hora}. Puedes pasar pagando la entrada.`);
        }

    }else{
        alert("Solo pueden pasar los mayores de edad.");
    }

}


validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(2);
validarCliente(3);
validarCliente(4);
validarCliente(8);
