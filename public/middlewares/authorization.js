import jsonwebtoken from "jsonwebtoken";
import { usuarios } from "./controllers/authentication.controller.js";  // Asegúrate de que la ruta sea correcta

// Verificación de admin
function soloAdmin(req, res, next) {
  const logueado = revisarCookie(req);
  if (logueado) {
    return next(); // Si el usuario está autenticado, permite el acceso
  }
  return res.redirect("/"); // Si no está logueado, redirige a la página principal
}

// Verificación de acceso público
function soloPublico(req, res, next) {
  const logueado = revisarCookie(req);
  if (!logueado) {
    return next(); // Si el usuario no está autenticado, permite el acceso
  }
  return res.redirect("/admin"); // Si está logueado, redirige a la página de admin
}

// Función para revisar el token de la cookie
function revisarCookie(req) {
  try {
    // Verifica si la cookie JWT existe
    const cookieJWT = req.headers.cookie?.split("; ").find(cookie => cookie.startsWith("jwt="));
    if (!cookieJWT) {
      return false; // Si no existe cookie JWT, retorna false
    }

    const token = cookieJWT.slice(4); // Extrae el valor del JWT (después de "jwt=")
    
    // Verifica el token usando jsonwebtoken y la clave secreta
    const decodificada = jsonwebtoken.verify(token, process.env.JWT_SECRET);
    
    // Busca al usuario en la lista de usuarios con el token decodificado
    const usuarioAResvisar = usuarios.find(usuario => usuario.user === decodificada.user);
    
    // Si el usuario no está en la lista o el token no es válido, retorna false
    if (!usuarioAResvisar) {
      return false;
    }
    
    return true; // Si la verificación fue exitosa, retorna true
  } catch (error) {
    console.error("Error al verificar la cookie o el JWT:", error);
    return false; // Si hay algún error en el proceso, retorna false
  }
}

// Exportar los métodos
export const authorization = {
  soloAdmin,
  soloPublico
};
