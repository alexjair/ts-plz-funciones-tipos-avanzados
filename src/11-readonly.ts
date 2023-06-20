class Persona {
  // SOLO LECTURA 👀
readonly nombre: string;
readonly edad: number;
  // ---

constructor(nombre: string, edad: number) {
  this.nombre = nombre;
  this.edad = edad;
}

saludar() {
  console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
}
}

const persona = new Persona("Freddy", 35);
persona.saludar(); // ✅"Hola, mi nombre es Freddy y tengo 35 años."

persona.nombre = "Pepe"; // ⛔Error: La propiedad 'nombre' solo se puede leer
persona.edad = 42; // ⛔Error: La propiedad 'edad' solo se puede leer
