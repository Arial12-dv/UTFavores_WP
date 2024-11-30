import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { methods as authentication } from './public/controllers/authentication.controller.js';
import { authorization } from './public/middlewares/authorization.js';

dotenv.config();

const app = express();

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración del middleware
app.use(express.json()); // Para procesar JSON en el body de las solicitudes
app.use(cookieParser()); // Para manejo de cookies
app.use(express.static(path.join(__dirname, 'public'))); // Archivos estáticos

// Rutas
app.get("/", authorization.soloPublico, (req, res) => 
  res.sendFile(path.join(__dirname, 'public', 'login.html'))
);

app.get("/register", authorization.soloPublico, (req, res) => 
  res.sendFile(path.join(__dirname, 'public', 'register.html'))
);

app.get("/admin", authorization.soloAdmin, (req, res) => 
  res.sendFile(path.join(__dirname, 'public', 'admin', 'admin.html'))
);

app.post("/api/login", authentication.login);
app.post("/api/register", authentication.register);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
