/*

Pepe empieza la universidad del ciclo de desarrollo de sotware. 
En su curso hay 19 alumnos, pero hay un error en el sitema que no permite registrar datos en 30 dias.

    -Crear una solucion que permita registrar los alumnos presentes (P) y ausentes (A) en la clase.
    -Pasados 30 dias, mostrar situacion final de los alumnos (No el total de presentes/ausentes).
    -Si alguien tiene mas de 18 faltas en un mes, estará suspenso.

*/


let cantidad = prompt("Cuantos alumnos son?");     //Preguntamos la cantidad de alumnos
let totalAlumnos = [];                             //Creamos un array para almacenar los alumnos

for (let i=0 ; i < cantidad ; i++){
    totalAlumnos[i] = [prompt("Nombre del alumno "+ (i+1)),0];   //Dentro del array creamos otro con el nombre del alumno y las faltas que tiene

}

const pasarLista = (nombre,posicion)=>{              //Creamos la funcion para pasar lista a los alumnos
    let faltas = prompt(`Está ${nombre} ?`);   

    if (faltas == "p" || faltas == "P"){             //Si alguien falta, sumaremos 1 falta a esa persona
        totalAlumnos[posicion][1]++;
    }
}


for (let i = 0 ; i < 30; i++){                         //Pasamos lista los 30 dias
    for (alumno in totalAlumnos){
        pasarLista(totalAlumnos[alumno][0],alumno);    //Le pasamos a la función el nombre del alumno para pasarle lista
    }
}

for (alumno in totalAlumnos){                                //Recorremos el array para mostrar todos los 
    let resultado = `<strong>${totalAlumnos[alumno][0]}:</strong><br>         
    -Asistencias: ${totalAlumnos[alumno][1]}<br>
    -Faltas: ${30 - totalAlumnos[alumno][1]}`;           //Almacenamos las faltas y asistencias de cada dia en una variable

    if(30- totalAlumnos[alumno][1] > 18){                    //Comprobamos si se ha pasado de faltas
        resultado+= "<br><br><b style='color: red'>SUSPENSO POR SUPERAR EL LIMITE DE FALTAS</b><br><br>"
    }else{
        resultado+= "<br><br>NO HAS LLEGADO AL LIMITE DE FALTAS<br><br>"
    }
    document.write(resultado);                   //Mostramos la info de faltas de cada alumno
}

