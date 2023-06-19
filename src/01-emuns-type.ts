/*
Un enum es un tipo de dato que nos permite crear un set de opciones.
Estas opciones son almacenadas bajo una estructura llave-valor similar a un objeto.
*/
type permiso = 'insert' | 'edit' | 'update' | 'delete';

// ENUM
enum ROLES {
	ADMIN = "admin",
	SELLER = "seller",
	CUSTOMER = "customer",
}

// TIPO DE DATO USER
type User = {
	username: string;
	role: ROLES;
  permiso: permiso;
}



// CONSTANTE
const myUser: User = { // es del tipo de dato User
	username: 'nicobytes',
	role: ROLES.SELLER, // Le asignamos el rol Seller    que es uno de los 3 roles disponibles
  permiso: 'update'
}
