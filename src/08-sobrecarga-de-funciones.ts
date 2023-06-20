/*
Sobrecarga de funciones: el problema:

Con la sobrecarga de funciones definimos diferentes firmas de una función en la que cada
firma puede manejar cierto tipado de entrada y salida. TypeScript decidirá de manera automática
qué firma es la correcta para usar basándose en los argumentos enviados y el tipo de datos de estos.

// 1️⃣Si le enviamos un array, nos debe unir cada elemento del array y devolver un string.
// 2️⃣Si le enviamos un string, nos debe separar cada caracter y formar un array como respuesta.
// [N,i,c,o] => 'Nico' ... string[] => string 1️⃣
//  'Nico' => [N,i,c,o] ... string => string[] 2
*/

function funParseStrArray(vCadena: string | string[]): string | string[] {
  if(Array.isArray(vCadena)){
    return vCadena.join(''); //string
  }else{
    return vCadena.split('');
  }
}
const resp = funParseStrArray('Dayana');
const resp2 = funParseStrArray(['J','a','i','r']);
console.log('funParseStrArray string Dayana => ',resp);
console.log("funParseStrArray array ['J','a','i','r'] => ",resp2);

//Forma Correcta de Usar!!

export function funParse(vCadena: string ): string[]
export function funParse(vCadena: string[]): string
export function funParse(vCadena: number): boolean

//export function funParse(vCadena: string | string[] | number): string | string[] | boolean{
//export function funParse(vCadena: unknown): unknown {
export function funParse(vCadena: unknown): unknown {
  if(Array.isArray(vCadena)){
    return vCadena.join(''); //string
  }else if (typeof(vCadena) === 'string'){
    return vCadena.split('');
  }else{
    return true;
  }
}
const respA = funParse('Dayana');
const respB = funParse(['J','a','i','r']);
const respC = funParse(2023);

//type script no infiere el tipo de dato
console.log('funParseStrArray string Dayana => ',respA.reverse());
console.log("funParseStrArray array ['J','a','i','r'] => ",respB.toUpperCase());
console.log("funParseStrArray number => ",respC.valueOf());

