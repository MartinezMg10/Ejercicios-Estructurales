/* 1. Evaluar las siguientes expresiones para A = 2, B = 5 y C=1:
a. 3 x A - 4 x B / A2
b. (((B + C) / 2 * A + 10) * 3 * B) – 6 */
/* 
let A = 2
let B = 5
let C = 1

 let res1 =3 * A - 4 * B / A**2
console.log(res1)

 let res2= (((B + C) / 2 * A + 10) * 3 * B) - 6 
 console.log(res2) */




/*  2. Un individuo desea invertir su capital en un banco y desea saber cuánto dinero ganará después
de un mes si el banco paga a razón de 1,2% mensual. */


/* let capital = parseInt(prompt("digita el capital a invertir"));
let interes = 1.2
let dineroMensual = (capital /100) * interes

console.log(`El dinero generado mensualmente es $${dineroMensual}`) */



/* 3.Calcule el área del triángulo y muestre su resultado.

let base,altura,area = 0

base = parseFloat(prompt("digite la base del triangulo"))
altura = parseFloat(prompt("digite la altura del triangulo"))
area = base * altura / 2
console.log("El área del triangulo es: " + area) */




/* 4.Una agencia de venta de autos paga a su personal de ventas un salario de $980.000, más una
comisión de $170.000 por auto vendido, más un 5% del valor de venta. Diseñar un algoritmo
para calcular el salario de un vendedor en un determinado mes, conociendo el nº de
automóviles vendidos y el total del monto de ventas. */


/* let sueldoMensual ,sueldo,comisiones,autosVendidos = 0
 
sueldo = 980000

autosVendidos = parseInt(prompt("digite la cantidad de autos vendidos en un mes"))
valorAuto = parseInt(prompt("digite el valor de los autos vendidos en un mes"))

comisiones = (autosVendidos * 170000) + (valorAuto * 5 / 100)
sueldoMensual = sueldo + comisiones

console.log(`El salario del vendedor este mes fue de $${sueldoMensual}`)
 */




/* 5. Hallar el promedio de calificaciones, teniendo en cuenta que el estudiante tiene 4 notas
decimales; dos notas valen el 40% y las otras dos valen el 60%. */

/* 
let calificaciones, promedio, notas1, notas2 = 0


calificacion1 = parseFloat(prompt("digite la primer nota"))
calificacion2 = parseFloat(prompt("digite la segunda nota"))
calificacion3 = parseFloat(prompt("digite la primer nota"))
calificacion4 = parseFloat(prompt("digite la segunda nota")) 

notas1 = calificacion1 + calificacion2
notas2 = calificacion3 + calificacion4

promedio1 = notas1 / 100 * 40
promedio2 = notas2 / 100 * 60

promedio = promedio1 + promedio2

console.log(`El promedio final es ${promedio}%`) */




/* 6. Calcular el número de pulsaciones que una persona debe tener por cada 10 segundos de
ejercicio, si la fórmula es: num. pulsaciones = (220 - edad)/10 */
/* 
let edad, pulsaciones = 0

edad = parseInt(prompt("Digite la edad"))
pulsaciones =  (220 - edad)/10 

console.log(`El numero de pulsaciones que debe tener por cada 10 segundos es  ${pulsaciones}`) */


/* 7. Un vendedor recibe un sueldo base, más un 10% extra por comisión de sus ventas, el vendedor
desea saber cuánto dinero obtendrá por concepto de comisiones por las tres (3) ventas que
realiza en el mes y el total que recibirá en el mes tomando en cuenta su sueldo base y
comisiones. */
/* 
 let sueldoBase,valorVenta, comision, comisiones, sueldoTotal = 0

sueldoBase = parseInt(prompt("Digite su sueldo base"))
valorVenta = parseInt(prompt("Digite el valor total de las ventas"))
comision = (valorVenta * 10 / 100)
sueldoTotal =  comision + sueldoBase

console.log(`El dinero obtenido por concepto de comisiones es de $${comision} y el sueldo total es de $${sueldoTotal}`)  */



/* 8. Un alumno desea saber cuál será su promedio general en las tres materias más difíciles que
cursa y cuál será el promedio que obtendrá en cada una de ellas. Estas materias se evalúan
como se muestra a continuación:

La calificación de Matemáticas se obtiene de la sig. manera:
Examen 90%
Promedio de tareas 10%
En esta materia se pidió un total de tres tareas.*/

let examen,notaExamen,notaTarea1,notaTarea2,notaTarea3, promedioDeTareas = 0

notaExamen = parseFloat(prompt("Digite la nota del examen de matematicas"))
examen = notaExamen * 90 / 100

notaTarea1 = parseFloat(prompt("Digite la nota de la primer tarea"))
notaTarea2 = parseFloat(prompt("Digite la nota de la segunda tarea"))
notaTarea3 = parseFloat(prompt("Digite la nota de la tercera tarea"))

promedioDeTareas = ((notaTarea1 + notaTarea2 + notaTarea3) / 3) *10 / 100

promedioMatematicas = examen + promedioDeTareas

console.log(`La nota obtenida en matematicas es de ${promedioMatematicas}`)  


/*La calificación de Física se obtiene de la sig. manera:
Examen 80%
Promedio de tareas 20%
En esta materia se pidió un total de dos tareas.*/

let examenFisica,notaExamenFisica,notaTarea1F,notaTarea2F,notaTarea3F, promedioDeTareasF, promedioFisica = 0

notaExamenFisica = parseFloat(prompt("Digite la nota del examen de Fisica"))
examenFisica = notaExamenFisica * 80 / 100

notaTarea1F = parseFloat(prompt("Digite la nota de la primer tarea de fisica"))
notaTarea2F = parseFloat(prompt("Digite la nota de la segunda tarea de fisica"))


promedioDeTareasF = ((notaTarea1F + notaTarea2F) / 2) *20 / 100

promedioFisica = examenFisica + promedioDeTareasF

console.log(`La nota obtenida en Fisica es de ${promedioFisica}`) 



/*La calificación de Química se obtiene de la sig. manera:
Examen 85%
Promedio de tareas 15%
En esta materia se pidió un promedio de tres tareas. */

let examenQuimica,notaExamenQuimica,notaTarea1Q,notaTarea2Q,notaTarea3Q, promedioDeTareasQ, promedioQuimica = 0

notaExamenQuimica = parseFloat(prompt("Digite la nota del examen de Quimica"))
examenQuimica = notaExamenQuimica * 85 / 100

notaTarea1Q = parseFloat(prompt("Digite la nota de la primer tarea de Quimica"))
notaTarea2Q = parseFloat(prompt("Digite la nota de la segunda tarea de Quimica"))
notaTarea3Q = parseFloat(prompt("Digite la nota de la tercera tarea de Quimica"))


promedioDeTareasQ = ((notaTarea1Q+ notaTarea2Q +notaTarea3Q) / 3) *15 / 100

promedioQuimica = examenQuimica + promedioDeTareasQ

console.log(`La nota obtenida en Quimica es de ${promedioQuimica}`) 

let promedioGeneral = (promedioFisica + promedioQuimica + promedioMatematicas)/ 3


console.log(`El promedio general de las tres materias es ${promedioGeneral}`) 