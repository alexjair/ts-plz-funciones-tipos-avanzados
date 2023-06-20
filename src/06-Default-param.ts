/*
Parámetros por defecto en TypeScript
En TypeScript, usamos el signo = para definir el valor por defecto que cierto
parámetro tendrá. Veamos un ejemplo:
*/
export const funCreateProductV2 = (
  id: string | number,
  isNew: boolean = false,
  stock : number = 0,
)=>{
  return {
    id,
    isNew,
    stock
  }
}

const resp4 = funCreateProductV2(1, true, 70);
console.log('resp4',resp4);

const resp5 = funCreateProductV2(2,true);
console.log('resp5',resp5);

const resp6 = funCreateProductV2(3);
console.log('resp6',resp6);

