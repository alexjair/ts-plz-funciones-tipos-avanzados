/*
El unknown type nos indica que una variable es de un tipo de dato desconocido.
Es similar a any, pero sin quitar el análisis de código estático que nos brinda TypeScript.
El tipo unknown nos fuerza a hacer una verificación de tipo. Esta es la forma que
TypeScript sugiere trabajar con variables de las cuales no sabemos de qué tipo serán.
Así evitamos utilizar constantemente any.
*/

//any variable
let anyVar: any;

anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 1;
anyVar = [];
anyVar = {};

let isNew: boolean = anyVar;

anyVar.toUpperCase();

//use de unknown
let unknownVar: unknown
unknownVar = true;
unknownVar = undefined;
unknownVar = null;
unknownVar = 1;
unknownVar = [];
unknownVar = {};

//unknownVar.toLowerCase(); // error de tipo de dato
//verificar antes de usar
if(typeof unknownVar === 'string'){
  unknownVar.toLowerCase();
}


