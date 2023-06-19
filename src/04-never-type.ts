/*
El never type se usa para funciones que nunca van a terminar o que detienen el programa.
Con esto TypeScript nos ayuda a detectarlos como por ejemplo un ciclo infinito cuando lanzamos
un mensaje de error.
*/
const notermina = () =>{ //tipo never
  while(true){
    console.log('Nunca para de aprender.');
  }
}

const fail = (message: string) => { // TypeScript infiere que esta función se de tipo `never`
  throw new Error(message)
}

const example = (input:unknown) => { //type never
  if(typeof input === 'string'){
    return 'Es un string';
  }
  else if (Array.isArray(input)){
    return 'Es un array';
  }
  return fail('Not Match'); // Lanzamos un error
}

console.log(example('Hola')) //'Es un string'
console.log(example([1,1,1,1])) // 'Es un array'
console.log(example(1212)) // error: Uncaught Error: Not Match
console.log(example('Hola después del fail')) // NUNCA SE EJECUTA, porque se lanzó un error previamente
