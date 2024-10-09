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