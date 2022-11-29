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


let sueldoMensual ,sueldo,comisiones,autosVendidos = 0
 
sueldo = 980000

autosVendidos = parseInt(prompt("digite la cantidad de autos vendidos en un mes"))
valorAuto = parseInt(prompt("digite el valor de los autos vendidos en un mes"))

comisiones = (autosVendidos * 170000) + (valorAuto * 5 / 100)
sueldoMensual = sueldo + comisiones

console.log(`El salario del vendedor este mes fue de $${sueldoMensual}`)





