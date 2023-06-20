/*
En JavaScript, los parámetros rest nos permiten enviar la cantidad de
parámetros que queramos a una función. Se denotan con ... seguido del nombre con el cual
identificaremos a estos parámetros:
*/

let sum = (...nums: number[]) => {
  let incremental:number = 0
  nums.forEach(number => incremental+= number)
  return incremental
}

console.log(sum(1,2))
console.log(sum(1,2,3,4,5,6,7,8,9,10))

function sumV2(...args: number[]){
  const addition = args.reduce((item, arg) => item + arg, 0);
  return addition
}

console.log(sumV2(1,2))
console.log(sumV2(1,2,3,4,5,6,7,8,9,10))


