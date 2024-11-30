/* import { MongoClient } from "mongodb";

const getConnection = async () => {
    try {
        const mongoUrl = "mongodb+srv://arianocsan:mod12345@cluster0.my04vim.mongodb.net/nodejs_pwa";
        const client = await MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

        // Verificar si la conexión fue exitosa
        console.log('Conexión exitosa a MongoDB');

        // Retornar la base de datos (la conexión permanece abierta)
        return client.db();
    } catch (error) {
        console.error("Error de conexión a MongoDB:", error);
    }
};

// Llamada para verificar la conexión
getConnection().then(() => {
    console.log("Conexión realizada y la base de datos está lista.");
}).catch((error) => {
    console.error("No se pudo conectar a la base de datos:", error);
});

export { getConnection };*/
