// let nombre = prompt ("Ingrese su nombre para una expriencia más personalizada")
// let apellido = prompt ("Ingrese su apellido")
// let datosIngresados = nombre + ' ' + apellido
// alert ("Le damos la bienvenida a Locos por el Peugeot 208 " + datosIngresados)

// let modeloAuto = prompt('Coloca aquí el modelo Peugeot que buscas')
// if(modeloAuto == "208"){
//     alert("Este sitio definitivamente es para vos");
// }else{
//     alert("Este sitio no es para vos");
// }

// let modelo = prompt ('Ingrese el numero de años a financiar')
// let monto = 100000
// switch(modelo) {
//     case '1':
//         interes = 1.30
//         console.log('interes 30%')
//         break
//     case '2':
//         interes= 1.50
//         console.log('interes 50%')
//         break
//     case '3':
//         interes= 1.70
//         console.log('interes 70%')
//     default:
//         console.log('El maximo permitido son 3 años')
// }

// alert('El precio con interes es de: ' + 100000 * interes)




// //Quiero combinar a los socios de la nueva base de datos con la antigua

// const sociosLocos208 = ['Pedro', 'Juan', 'Natalia', 'Sofia', 'Martin']

// const nuevosSociosLocos208 = ['Matias', 'Fabian', 'Rodrigo']

// const todosLosSocios = sociosLocos208.concat(nuevosSociosLocos208)
// console.log(todosLosSocios)

// //Quiero verificar si Ramiro y Natalia son socios del club

// console.log (todosLosSocios.includes('Ramiro'))
// console.log (todosLosSocios.includes('Natalia'))

// //Quiero quitar a Pedro y Juan del club de Locos por el 208

// todosLosSocios.splice(0,2)
// console.log(todosLosSocios)

// //Arreglos y objetos

// class auto{
//     constructor(id, anio, color, motor, combustible, precioDolar){
//         this.id = id
//         this.anio = anio
//         this.color = color
//         this.motor = motor
//         this.combustible = combustible
//         this.precioDolar = precioDolar
//         this.vendido = false;
//     }
// }

// const autos = [];
// autos.push(new auto ("1", "2022", "blanco", "1.6", "nafta", 20000))
// autos.push(new auto ("2", "2015", "negro", "1.8", "nafta", 10000))
// autos.push(new auto ("3", "2020", "rojo", "1.6", "diesel", 18000))

// console.log(autos)

// //Un cliente me pide que le diga si tengo disponible un 208 que pueda pagar ya que cuenta con USD18000 (método de filtrado) y otro cliente quiere un auto blanco, verificaremos si tenemos en concesionaria un 208 de dicho color (método de búsqueda).

// const resultado = autos.filter((el) => el.precioDolar <= 18000)

// const resultado2 = autos.find((el) => el.color === "blanco")

// console.log(resultado)
// console.log(resultado2)

//Alerta Inicial

Swal.fire('¿Estás listo para conocer la pasión por el Peugeot 208?')

let boton1 = document.getElementById('boton1');

// Utilizo Event Listener

boton1.addEventListener("click",function(){
    alert('Peugeot 208 color rojo, naftero, motor nuevo, 140000km.');
});

let boton2 = document.getElementById('boton2');

boton2.addEventListener("click",function(){
    alert('Peugeot 208 color negro, diesel, detalle ínfimo de chapa y pintura en puerta trasera, 140000km.');
});

let boton3 = document.getElementById('boton3');

boton3.addEventListener("click",function(){
    alert('Peugeot 208 color blanco, naftero, motor nuevo, 180000km.');
});

let boton4 = document.getElementById('boton4');

boton4.addEventListener("click",function(){
    alert('Peugeot 208 color gris plata, diesel, llantas nuevas, 90000km.');
});

let titulo1 = document.getElementById('titulo1');
let titulo2 = document.getElementById('titulo2');
let titulo3 = document.getElementById('titulo3');
let titulo4 = document.getElementById('titulo4');

let precio1 = document.getElementById('precio1');
let precio2 = document.getElementById('precio2');
let precio3 = document.getElementById('precio3');
let precio4 = document.getElementById('precio4');

let añosDeFinanciamiento = Number(prompt="Ingrese la cantidad de años a financiar (de 1 a 3)")

//Agrego Objetos

const autos = [
    {
        id: 1,
        titulo: "Peugeot 208 Active",
        año: "2020",
        precio: 6000,
        color: "Negro",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 2,
        titulo: "Peugeot 208 GT",
        año: "2019",
        precio: 7000,
        color: "Azul Noche",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 3,
        titulo: "Peugeot 208 Allure",
        año: "2018",
        precio: 6000,
        color: "Gris Plata",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
    {
        id: 4,
        titulo: "Peugeot 208 Allure Pack",
        año: "2015",
        precio: 5000,
        color: "Rojo",
        descripcion: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit repellendus laborum quam saepe pariatur enim doloribus itaque laudantium vitae perferendis.",
    },
]

const sectionAutos = document.querySelector(".sectionAutos");

//Cargo Elementos 

window.addEventListener("DOMContentLoaded", function(){
    let displayAutos = autos.map(function(item){
        //console.log(item);
        return `<h1>${item.titulo}</h1>
        <h2>$${item.precio}</h2>
        <h3>${item.color}</h3>
        <p>${item.descripcion}}</p>`;
    });
    displayAutos=displayAutos.join("");
    sectionAutos.innerHTML = displayAutos
});


// Cotización de dolar del momento para que me puedan pagar en pesos  //

    fetch("https://api.bluelytics.com.ar/v2/latest")
    .then (response => response.json())
    .then (data => console.log(data))
    .then (data => console.log(data.blue))



