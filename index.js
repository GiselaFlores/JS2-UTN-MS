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