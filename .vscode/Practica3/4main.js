function simularPeticionAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Datos recibidos correctamente");
    }, 5000);
  });
}
async function obtenerDatos() {
  try {    console.log("Esperando respuesta de la API...");
    const resultado = await simularPeticionAPI();
    console.log("Resultado:", resultado);
  } catch (error) {
    console.error("Ocurrió un error:", error);
  }
}
obtenerDatos();