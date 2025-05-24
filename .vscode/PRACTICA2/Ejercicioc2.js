const personas = [
    { nombre: "Luis", edad: 25 },
    { nombre: "Ana", edad: 30 },
    { nombre: "Carlos", edad: 28 }
]
const luis = personas.find(persona => persona.nombre === "Luis");
console.log("Encontrado:", luis);

//
personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
});


const totalEdad = personas.reduce((total, persona) => total + persona.edad, 0);
console.log("Suma total de edades:", totalEdad);
