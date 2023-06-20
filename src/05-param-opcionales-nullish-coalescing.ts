/*
Los parámetros por defecto se usan para predefinir valores a los parámetros de una
función en caso de no especificar un valor al invocarla.
*/

export const funCreateProduct = (
  id: string | number,
  isNew?: boolean,
  stock? : number
)=>{
  return {
    id,
    isNew: isNew || true, //error, no se debe trabajar asi
    stock: stock || 999 //error, no se debe trabajar asi
  }
}
const resp1 = funCreateProduct(1, true, 70);
console.log('resp1',resp1);

const resp2 = funCreateProduct(1);
console.log('resp2',resp2);

const resp3 = funCreateProduct(1,false,0);
console.log('resp3',resp3);

//Corregido
export const funCreateProductV2 = (
  id: string | number,
  isNew?: boolean,
  stock? : number
)=>{
  return {
    id,
    isNew: isNew ?? false,
    stock: stock ?? 0
  }
}

const resp4 = funCreateProductV2(1, true, 70);
console.log('resp4',resp4);

const resp5 = funCreateProductV2(1);
console.log('resp5',resp5);

const resp6 = funCreateProductV2(1, false, 0);
console.log('resp6',resp6);

