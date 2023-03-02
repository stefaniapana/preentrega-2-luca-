let nombre = prompt ("Ingrese su nombre para una expriencia más personalizada")
let apellido = prompt ("Ingrese su apellido")
let datosIngresados = nombre + ' ' + apellido
alert ("Le damos la bienvenida a Locos por el Peugeot 208 " + datosIngresados)

let modeloAuto = prompt('Coloca aquí el modelo Peugeot que buscas')
if(modeloAuto == "208"){
    alert("Este sitio definitivamente es para vos");
}else{
    alert("Este sitio no es para vos");
}

let modelo = prompt ('Ingrese el numero de años a financiar')
let monto = 100000
switch(modelo) {
    case '1':
        interes = 1.30
        console.log('interes 30%')
        break
    case '2':
        interes= 1.50
        console.log('interes 50%')
        break
    case '3':
        interes= 1.70
        console.log('interes 70%')
    default:
        console.log('El maximo permitido son 3 años')
}

alert('El precio con interes es de: ' + 100000 * interes)

