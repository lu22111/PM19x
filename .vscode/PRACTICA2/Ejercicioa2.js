const persona = {
    nombre: "Ivan Isay",
    edad: 37,
    direccion: { // Aquí estaba 'direnccion', lo corregí a 'direccion'
        ciudad: "Queretaro",
        pais: "Mx"
    }
};


//destructuracion 
const { nombre, edad, direccion: { ciudad } } = persona;

//mostrar mensaje
console.log(`Me llamo ${nombre}, tengo ${edad} años y vivo en ${ciudad}`);