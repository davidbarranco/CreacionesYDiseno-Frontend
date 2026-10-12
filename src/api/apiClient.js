// URL base de la API del proyecto
const API_URL =
    "http://localhost:8080/CreacionesYDiseno/UsuarioServlet";

/**
 * Realiza una petición GET al backend.
 * @returns {Promise<Array>} Lista de usuarios.
 */
export async function obtenerUsuarios() {

    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
        throw new Error("Error al consultar los usuarios");
    }

    return await respuesta.json();
}

/**
 * Registra un nuevo usuario en el backend.
 * @param {Object} usuario - Datos del usuario.
 * @returns {Promise<Object>} Respuesta del servidor.
 */
export async function registrarUsuario(usuario) {

    const datos = new URLSearchParams();

    datos.append("nombre", usuario.nombre);
    datos.append("apellido", usuario.apellido);
    datos.append("correo", usuario.correo);
    datos.append("password", usuario.password);

    const respuesta = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: datos
    });

    const resultado = await respuesta.json();

    if (!respuesta.ok) {
        throw new Error(
            resultado.error || "No fue posible registrar el usuario"
        );
    }

    return resultado;
}