/*
Las tuplas o tuples nos permiten crear un array fuertemente tipado especificando
el tipo de dato de cada elemento, así como una cantidad definida de elementos que podrá almacenar.
Las tuplas no vienen en el conjunto de tipos de datos por defecto de JavaScript.
*/
//Array fuerte mente typado
const prices: (number | string)[] = [1,2,3,4,5,6,'uno','dos'];
prices.push(10);
prices.push("tres");
console.log(prices);

//types
type arrayGenero = 'M'|'F';

//Creacion de Tupla:
let vTupla: [string, number, String[],arrayGenero];
//asignando
vTupla = ['jair',39,['M','F'],'F'];
console.log('original',vTupla);

//desctructure de tupla:
const [username, age, genero, op] = vTupla;
console.log('Destructure',username);
console.log('Destructure',age);
console.log('Destructure',genero);
console.log('Destructure',op);

