//callback asincrónico

function accionCualquiera(){
    console.log("esto es un proceso");
}

setTimeout(accionCualquiera, 2000); // 2 seg

// método corto

setTimeout(()=> console.log("esto es un proceso corto"), 2000);

// ejercicio es hacer un contador 

const tareaUno = setTimeout(()=> console.log("esto es un proceso corto"), 2000);

tareaUno();

// ejemplo:

const tareaDos = (tareaMensaje) =>{
    console.log("Notificar tarea dos..");
    setTimeout(()=> {
        tareaMensaje();
    }, 3000);
}

// pasarle en forma corta
tareaDos(()=>console.log("Soy la tarea dos ejecutada a los 3 segundos"));

//proceso largo
function pirula(){
    console.log("proceso hecho con pirula");
}

tareaDos(pirula());

// Promesas

// lo que evaluo de la promesa es se cumpla o no se cumpla

//.then la promesa cumplida
//.catch la promesa rechazada //try intenta de hacer esto mientras se cumpla
//.then(resolve, reject) la promesa se cumpla o se rechace
//finally analiza la ejecución de salir del estado pendiente 

// La comunicación con la API externa

fetch("url")
.then(response => {
    return response.json(); // covierta a JSON
})

.then(data =>{
    console.log(data); // objeto procesado
})

.catch(error => {
    console.error("ocurrio un error número: ", error);
})

.finally(()=>console.log("proceso cumplio"));


// async await

async function asincro(){
    const response = await fetch("url");
    const data = await response.json();
    return data;
}

await asincro();

// otra forma de async await

const request = async ()=>{
    try{
        const response = await fetch("url");
        const data = await response.json();
        return data;
    } 
    
    catch (error) {console.error("ocurrio un error número: ", error);
    }
}

//link a repositorio de ejemplo de bajada de peliculas
//https://github.com/GiselaFlores/BAJADADEPELICULAS-UTN