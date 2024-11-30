/*import { getConnection } from "./database/connectionMongoDB.js";

const getComidas = async () => {
    try {
        // Verificar que se ha recibido una conexión a la base de datos
        const database = await getConnection();
        if (!database) {
            console.error("No se pudo obtener la base de datos.");
            return;
        }

        console.log("Conexión realizada con éxito, obteniendo la colección 'comida'...");

        // Ahora accedemos a la colección 'comida'
        const comida = await database.collection("comida").find().toArray();

        // Verificamos si se encontraron datos en la colección
        if (comida.length === 0) {
            console.log("No se encontraron elementos en la colección 'comida'.");
        } else {
            console.table(comida);  // Mostrar los datos de la colección 'comida'
            console.log("Comidas listadas!");
        }
    } catch (error) {
        console.error("Error al obtener los elementos de la colección 'comida':", error);
    }
};

// Ejecutamos la función para obtener las comidas
getComidas();*/
