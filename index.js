console.log("hola mundo js");

//comentario de linea
/* comentario debloque */ 

//El ; no es necesariuo pero debería
//La forma de escritura camelCase

//Variable

/* var globales *no se utilizan*
   let locales/scope

   const constantes
*/

var calculoEdad = 20;
let nombre = "Pedrito";

const IVA = 21;

console.log(calculoEdad);
console.log(nombre);
console.log("El IVA Argentino es de: ", IVA);


//let numeroDos = new Number(2);

let uno, dos = 2, tres = "3", cuatro, cinco = true;

dos = dos*5;
console.log(dos);

//tipos de datos 

let resultado = dos + tres; //concateno 10 3 = 103 string
console.log(resultado);

let resultadoDos = dos * tres; // resuelve como números, numero * string = numero
console.log(resultadoDos);

let resultadoTres = dos * cuatro; 
console.log(resultadoTres);

let resultadoCuatro = cuatro*2; 
console.log(resultadoCuatro);
console.log(cuatro);


// operadores aritméticos + - * / ** % asignación ++ -- += -= *=

//dos = dos + 5;
//dos += 5;

//Pedir datos del usuario prompt()  (convertir dato a numero)
//parseos parseInt() parseFloat()

let pedirDato = parseInt(prompt("Ingrese su sueldo: "));
console.log("El 20% de tu sueldo es: ", pedirDato*0.2);

// devolver al HTML (alt+96 = `) ${variable}

document.write("Hola mundo HTML");
document.write( "<h1>Esto es un titulo desde JS</h1>" );
document.write(`<h1>Esto es otro título desde JS</h1> hola que tal, el valor de la variable dos es: ${dos}`);

//operador de comparación (booleanos)
// == valor  === valor y tipo de dato
// != valor  !== valor y tipo de dato
// < menor > mayor <= menor >= mayor

//operadores lógicos 
// && Y lógico (conjunción)  solo es verdadero cuando ambas partes son true
// || O lógico (diyunción)  solo es verdadera para todos los casos donde no sean ambos false
// ! Negación

//criterio (5 >= numero || numero < 2) si numero=6 false
//criterio (5 >= numero || numero < 2) si numero=2 true
//criterio (5 >= numero || numero < 2) si numero=-10 true 

//criterio (numero > 5 && numero <= 20) si numero=5 false
//criterio (numero > 5 && numero <= 20) si numero=6 true
//criterio (numero > 5 && numero <= 20) si numero=30 false

//criterio (numero > 5 && numero <= 20) && (5 >= numero || numero < 2) numero=6 false

//jerarquia de operadores ()  ^  */ +-  %resto  < >  !  &&  ||

//Estructura de control

//IF

let nota = 7;

if(nota >= 7){
   console.log("Estas aprobado");
} else{
   console.log("Desaprobaste");
}

if(nota >= 7){
   console.log("Estas aprobado");
} else if(nota === 4){
   console.log("Se va a final");
} else {
   console.log("Desaprobaste");
}

// ternario condición ? valor verdad : valor falso;

let calificacion = nota >= 7 ? "aprobado" : "desaprobado";
console.log(calificacion);

let calificacionDos =
   nota <= 4 ? "Insuficiente" :
   nota <= 6 ? "A final" :
   nota <= 8 ? "Muy bien" :
   nota <=10 ? "Excelente" :
   "La nota no esta correcta";

console.log(calificacionDos);

//SWITCH

switch(nota){
   case 10:
      calificacion = "sobresaliente";
      break;
   case 9:
   case 8:
      calificacion = "Muy buena nota";
      break;
   case 7:
   case 6:
      calificacion = "Buen nota";
      break;
   case 5:
      calificacion = "safando";
      break;
   case 4:
   case 3:
   case 2:
   case 1:
      calificacion = "no aprobado";
      break;
   default:
      calificacion = "nota incorrecta";
      break;     
}

console.log("La nota que quedará registrada en tu boletín es: ", calificacion);
document.write(`<h1>La nota que quedará registrada en tu boletín es: ${calificacion}</h1>`);


// BUCLES while for do while

//while

let i = 0;

while (i < 5){
   console.log("Valor de la posisción i: ", i);
   i++; // i = i + 1;
}

//do-while

do{
   console.log("hola a todos");
   i++;
}while (i < 5);

console.log("salida del bucle");


// for (inicializacion; condición del fin de dato; incremento)

for(let z = 5; z >= 0; z--){
   console.log("Valor de la posisción i: ", z);
}

//FUNCIONES declaracion y llamado

//declaración

function saludar(){
   //proceso
   console.log("Hola soy una función de JS");
   document.write("Hola soy una función de JS");
   let hola = "Soy Juan";
   let saludito = `Bienvenido a mi sitio, ${hola}`;
   document.write(saludito);
}

//llamado
saludar();


//parametros

let nombres = "Matias";

function saludo(nombres, edad, apellido = "Perez"){
   //proceso
   console.log(`Hola ${nombres}, ${apellido} y su edad es ${edad}`);
   //nombres = "pepe"; local scope de la función
}

//llamado
saludo("Laura", 45);
saludo(nombres, 20);

//Ejemplo de tabla de multiplicar

function tablaDeMultiplicar(tabla, hasta){
   for(let i = 1; i <= hasta; i++){
      console.log(`${tabla} x ${i} = ${tabla*i}`);
      document.write(`<p>${tabla} x ${i} = ${tabla*i}</p>`);
   }
}

tablaDeMultiplicar(5, 15);
tablaDeMultiplicar(20, 10);

//FUNCIONES CON RETORNO

function multiplicarDos(a, b){
   //procesos
   return a*b;
}

let resultadoMultiplicacion = multiplicarDos(10, 50);

//retorno en procesos de otra lógica

let a = parseInt(prompt("ingrese el numero a multiplicar: "));
let b = parseInt(prompt("ingrese el otro numero a multiplicar: "));

let bingo = multiplicarDos(a, b);
console.log(multiplicarDos(a, b));

if(multiplicarDos(a, b) >= 100){
   alert("Bingo");
} else {
   alert("segui participando");
}

//ternario

 let premio = multiplicarDos(a, b) >= 100 ? "Bingo" : "Segui participando";


 //FUNCIONES VARIABLES

 let suma = function(a, b){
   if(a > b){
      return a*b;
   } else {
      return a+b;
   }
}

let result = suma(5, 4);

// otra alternativa de return

let sumaDos = function(a, b){
   if(a > b){
      return console.log(`como ${a} es mayor a ${b}, la multiplicación de ${a}x${b}=${a*b}`);
   } else {
      return console.log(`como ${a} es menor a ${b}, la suma de ${a}+${b}=${a+b}`);
   }
}

let results = sumaDos(5, 4);
document.write(`<h1>${result}</h1>`);
document.write(`<h1>${sumaDos(5, 4)}</h1>`);


// FUNCION ARROW FUNCTION

let alCuadrado = x => x*x; //return incorporado
console.log(alCuadrado(4));

//+parametros

let alCuadradoMasValor = (x, y) => x*x + y; //return incorporado
console.log(alCuadradoMasValor(4, 6));

//+parametros +lógica

let areas = (x, y) => {
   if(x === y){
      console.log(`La figura es un cuadrado de lado ${x}, y su area es de: ${alCuadrado(x)}`);
   } else {
      console.log(`La figura es un rectangulo de lado ${x} y alto ${y}, y su area es de: ${x*y}`);
   }
}

console.log(areas(4, 2));

//Simplificación

//function (a){
//   return a + 100;
//}

//(a) => { return a + 100}

//(a) => a + 100;

//a => a + 100;


//FUNCIONES ANONIMAS

let iva = function(){return 21;}; 

//proceso

let bandera = true;

const CambioDeBandera = function(bandera){
   if(bandera){
      bandera = false;
   } else {
      bandera = true;
   }
   return bandera;
}

bandera = CambioDeBandera(bandera);


//optimizacion

//let bandera = true;

//const CambioDeBandera = (bandera) => !bandera;

//bandera = CambioDeBandera(bandera);

//CALLBACKS

function saludarUsu(nombre){
   document.write(`<h1>Hola ${nombre}, bienvenido a mi sitio </h1>`);
}

function datoUsuario(saludarUsu){
   let nombre = prompt("Ingrese su nombre: ");
   saludarUsu(nombre);
}

datoUsuario(saludarUsu);

//Objetos

let usuario = new Object();

usuario.nombre = "Pedro";
usuario.edad = 45;

console.log("El nombre de usuario es: ", usuario.nombre, ". Su edad es de: ", usuario.edad);
console.log(usuario);

let usu = {
   nombre: "Jacinta",
   edad: 45,
   nacionalidad: "Argenta",
   dniGenero: function(){
       return this.nombre + "No binario"
   },
   quienSoy() {return "Soy " + this.nombre}
}

console.log(usu.nombre);
console.log(usu.dniGenero());

usu['nacionalidad'] = "Argentina";
console.log(usu.nacionalidad);

console.log(usu.quienSoy());

// objetos class

class Animal {
   constructor(nombre, tipo, edad){
       this.nombre = nombre;
       this.tipo = tipo;
       this.edad = edad;    
   }
}

let perro = new Animal("Firulais", "pepe", 8);

perro.nombre = "pichichus";
perro.edad = 10;

//función constructora

function Animalito(nombre, tipo, edad){
   this.nombre = nombre;
   this.tipo = tipo;
   this.edad = edad;       
}

let gato = new Animalito("Chocolate", "siames", 5);
let pez = new Animalito("Dory", "koi", 1);

// métodos

//let nombreUsuario = new String("hola Paula");
let puntoLength = nombreUsuario.length;
console.log("La cantidad de caracteres del String es de: ", nombreUsuario.length);

//String

let charAt = nombreUsuario.charAt("P");

let concat = nombreUsuario.concat(perro.nombre, gato.nombre, "hola");

let indexOf = nombreUsuario.indexOf("P", 2);

let lastIndexOf = nombreUsuario.lastIndexOf("P", 2);

nombreUsuario.toLowerCase();
nombreUsuario.toUpperCase();
nombreUsuario.repeat(5);
nombreUsuario.trim();// saca los espacios laterales " Hola " "Hola"
//nombreUsuario.replace(,);
nombreUsuario.substring(4, 8);

console.log("hola" + gato.nombre);
document.write(`<h1> hola ${usu.dniGenero()} </h1>`); //alt 96

//objetos Math

Math.abs(-5);
Math.max(1, 20, 50, 6);
Math.min(1, 20, 50, 6);
Math.pow(2, 10);
Math.sqrt(2);
Math.random(); // un número aleatorio [0, 1)
Math.round(); // -3.75 / -4
Math.floor(); // 3.75 / 3.25 - 3
Math.ceil(); // 3.75 / 3.25 - 4
Math.trunc(); // 3.75 / 3

// Crear objetos de tipo Usuario con datos ingresados por el usuario

// 1 Ingreso de datos string nombre, apellido, dni, mail, fecha_nacimiento
/*
let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let dni = prompt("Ingrese su dni:");
let mail = prompt("Ingrese su mail:");
let fechaN = prompt("Ingrese su fechaN:");

// 2 Armar la estructura de creación del objeto

function usuarioObj(nombre, apellido, dni, mail, fechaN){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;  
    this.mail = mail; 
    this.fechaN = fechaN;      
}

let usuarioUno = new usuarioObj(nombre, apellido, dni, mail, fechaN);

// 3 Mostrar al usuario la información por la web de su registro

document.write(`
        <h1 class="mt-5 text-center" > Datos ingresados del registro: </h1>

            <div class="tablaDatos">
                <table>
                    <tr>
                        <th>Descripción</th>
                        <th>Dato ingresado</th>
                    </tr>

                    <tr>
                        <td>Nombre:</td>
                        <td>Apellido:</td>
                        <td>Dni:</td>
                        <td>Mail:</td>
                        <td>Fecha de Nacimiento:</td>
                    </tr>

                    <tr>
                        <td>${usuarioUno.nombre}</td>
                        <td>${usuarioUno.apellido}</td>
                        <td>${usuarioUno.dni}</td>
                        <td>${usuarioUno.mail}</td>
                        <td>${usuarioUno.fechaN}</td>
                    </tr>
                </table>
            </div>
    
    `);

*/

//ARRAY

const array = new Array("a", 5, "hola", 120, true); //tradicional
console.log(array[2]);

const frutas = ["manzana", "frutilla", "naranja", "banana", "pera"];

const verduras = [];

verduras[0] = "papa";
verduras[1] = "zapallo";
verduras[2] = "tomate";

console.log(verduras[2]);

console.log(frutas.length); //cantidad de elementos

console.log(frutas.length -1); // cantidad de posiciones

console.log("verduras: ", verduras);


// recorrer el array

//FOREACH

for(i = 0; i < frutas.length; i++){
   console.log(frutas[i]);
}

frutas.forEach( fruti => console.log(fruti));

//MAP

const numerosPares = [2, 4, 6, 8, 10];

const numerosImpares = numerosPares.map(function(num){
   return num -1;
});

// destrucuración de un array

const posiciones = [10, 20];

const [valorUno, valorDos] = posiciones;  // valorUno = 10 valorDos = 20

// cambio de variables

let varUno = 10;
let varDos = 20;

/*
let aux = varUno;
varUno = valorDos;
varDos = aux;
*/

[valorUno, valorDos] = [valorDos, valorUno];

const posAmpliada = [10, 11, ...pair, 30];  // [10, 11, posiciones, 30]

// métodos

frutas.push("kiwi");
console.log(frutas);

let eliminado = frutas.pop(); // elimina el último y devuelve ese eliminado

let tamano = frutas.unshift("frutilla", "arándanos", "durazno", "uvas"); //agrega al inicio y devuelve cantidad de elementos, tamaño del array
console.log(frutas);

let primero = frutas.shift(); // elimina y devuelve el primero

let verduleria = frutas.concat(verduras); // concatena dos o mas arrays
console.log(verduleria);

let busquedaInicio = verduleria.indexOf("frutilla", 3); // devuelve la posición donde esta el elemento la primera vez que aparece y busca desde el princinpio
console.log(busquedaInicio);

let busquedaFinal = verduleria.lastIndexOf("frutilla"); 

let arrayNuevo = verduleria.slice(2, 6); // formar un sub array de un array, y me lo devuelve como un nuevo array

verduleria.splice(2, 0, "lechuga");
console.log(verduleria);

verduleria.splice(1, 1, "pera");
console.log(verduleria);

verduleria.reverse();
console.log(verduleria);

verduleria.sort();
console.log(verduleria);

const numeros = [10, 5, 1, 59, 6, 89, 18, 9, 27, 235, 425, 38];
console.log(numeros.sort());

//[1, 10, 18, 235, 27, 38, 425, 5, 59, 6, 89, 9]

numeros.sort((a, b) => a - b);
console.log(numeros);

numeros.toSorted();
console.log(numeros);

const cumpleCriterio = numeros.every(num => num %2 === 0);
console.log(cumpleCriterio);

const cumpleAlMenosUno = numeros.some(num => num %2 === 0);
console.log(cumpleAlMenosUno);

const doble = numeros.map(num => num*2);
console.log(doble);

const pares = numeros.filter(num => num %2 === 0);
console.log(pares);

const busquedaCondicion = numeros.findIndex(num => num > 25);
console.log(busquedaCondicion);

const busquedaElemento = numeros.find(num => num > 25);
console.log(busquedaElemento);

const acumulador = numeros.reduce((acumula, dato) => acumula + dato, 0);
console.log(acumulador);

const acumuladorDereIzq = numeros.reduceRight((acumula, dato) => acumula - dato, 0);
console.log(acumuladorDereIzq);

//DOM

//Selectores

const id = document.getElementById("unid");
const name = document.getElementsByName("form");
const tag = document.getElementsByTagName("p");
const clase = document.getElementsByClassName("fondorojo");

const comodinUno = document.querySelector(".verde");
//const comodinUno = document.querySelector("#verde");

const comodinMultiple = document.querySelectorAll(".rojo");

// devolver al HTML

//nodo.textoContext = "Hola a todos";
//nodo.innerHTML = "<p>hola mundo</p>";

// insertar una imagen

const div = document.getElementById("divPrincipal");

const img = document.createElement("img");
img.src = "http://www.google.com./img.png";
img.alt = "img de google";

div.appendChild(img);

/******/

const ul = document.getElementsByTagName("ul");

numeros.forEach(num => {
   const li = document.createElement("li");
   li.innerHTML = num;
   ul.appendChild(li);
   //li.className = "rojo";
});

//ul.className="";

// EJEMPLO: cambio de color rgb(255, 255, 255);

const btn = document.querySelector("button");

//toque el botón y cambie de color el fondo

//Pasos:
//función que permita cambiar el color
//un generador de colores rgb(255 255 255)
// con el color ya armado edvuelvo el color a la acción (al click del botón)

//random() devolverme un número cualquiera entre 0 y <1

function randomColor(number){
   return Math.floor(Math.random()*(number + 1));
}

/*
console.log(randomColor(255));
console.log(randomColor(255));
console.log(randomColor(255));
console.log(randomColor(255));
*/

//randomColor(255);

btn.addEventListener("click", ()=>{
   const color = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;  
   document.body.style.backgroundColor = color;  // rgb(123, 54, 98);
})





