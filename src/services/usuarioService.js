// Importamos las funciones encargadas
// de comunicarse con nuestra API.
import {
    obtenerUsuarios,
    registrarUsuario
} from "../api/apiClient";

/**
 * Obtiene todos los usuarios registrados.
 * @returns {Promise<Array>} Lista de usuarios.
 */
export async function listarUsuarios() {
    return await obtenerUsuarios();
}

/**
 * Registra un nuevo usuario.
 * @param {Object} usuario - Datos del usuario.
 * @returns {Promise<Object>} Resultado del registro.
 */
export async function crearUsuario(usuario) {
    return await registrarUsuario(usuario);
}