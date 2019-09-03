//arreglos

let notas = []

notas.push(13)
notas.push(8)
notas.push(18)
notas.push(20)
notas.push(5)

notas[5] = 14

console.log(notas)

//objetos

let alumno1 = {nombre: "Ernesto", 
apellido: "Lopez", edad: 22}
let alumno2 = {nombre: "Pedro", 
apellido: "Navaja", edad: 80}

let alumno3 = {}
alumno3.nombre = "Lorenzo"
alumno3.apellido = "Abcde"
alumno3.edad = 30

//console.log(alumno1.nombre + " tiene "  +
//alumno1.edad + " años")

alumnos = []
for(let i = 0; i < 5; i++){
    let alumno = {}
    alumno.nombre = "nombre-" + i
    alumno.apellido = "apellido-" + i
    alumno.edad = parseInt(30 * Math.random()) 

    alumnos.push(alumno)
}

console.log(alumnos)