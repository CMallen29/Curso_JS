//-------------------------------------- POO --------------------------------------

//----[ Conceptos basicos ]----

//creamos una clase
class animal { 

  //Pasamos los parámetros del objeto al constructor
  constructor(especie,edad,color){     
    this.especie=especie;
    this.edad=edad;
    this.color=color;
    this.info=`Soy un ${this.especie}, mi edad es ${this.edad} y soy de color ${this.color}.`;
  }

  //Creamos un método para ver informacion del objeto [dentro de la clase animal]
  verInfo() {                        
    document.write(this.info+"<br>");
  }

}

//Instanciamos un objeto de la clase animal
const gato = new animal("Gato","2","Marron");     
const pajaro = new animal("Loro","1","Azul");    

//Llamamos al metodo de la clase animal
gato.verInfo();
pajaro.verInfo();




//----[ Abstraccion / Encapsulacion / Polimorfismo / Herencia ]----


class perro extends animal {               //Usamos extends para heredar de otra clase
  constructor(especie,edad,color,raza){     //Pasamos los parámetros del objeto al constructor
    super(especie,edad,color)               //Los metodos los hereda de animal
    this.raza=raza;
  }

  set setRaza(raza){                      //Definimos el setter para poder modificar atributos
    this.raza=raza;
  }
  get getRaza(){                          //Definimos el getter para acceder a atributos
    return this.raza;
  }


  ladrar(){
    alert("Gau!");
  }
}

const chucho = new perro("Perro","5","Negro","Husky");   //Instanciamos un objeto de la clase perros

chucho.verInfo();                 //Como el metodo está en animal, al heredar de esa clase podemos usarlo
chucho.ladrar();                  //Este metodo sólo lo puede usar perro, no gato ni pajaro.





