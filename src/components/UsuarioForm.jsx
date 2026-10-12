

import { useState } from "react";
import { crearUsuario } from "../services/usuarioService";

function UsuarioForm({ onUsuarioRegistrado }) {

    const [formulario, setFormulario] = useState({
        nombre: "",
        apellido: "",
        correo: "",
        password: ""
    });

    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState("");
    const [guardando, setGuardando] = useState(false);

    function manejarCambio(evento) {

        const { name, value } = evento.target;

        setFormulario({
            ...formulario,
            [name]: value
        });
    }

    async function manejarEnvio(evento) {

        evento.preventDefault();

        setMensaje("");
        setError("");

        try {

            setGuardando(true);

            const resultado = await crearUsuario(formulario);

            setMensaje(
                resultado.mensaje ||
                "Usuario registrado correctamente."
            );

            setFormulario({
                nombre: "",
                apellido: "",
                correo: "",
                password: ""
            });

            if (onUsuarioRegistrado) {
                onUsuarioRegistrado();
            }

        } catch (error) {

            console.error(
                "Error al registrar usuario:",
                error
            );

            setError(
                error.message ||
                "No fue posible registrar el usuario."
            );

        } finally {

            setGuardando(false);
        }
    }

    return (

        <div className="registro-container">

            <div className="registro-info">

                <span className="registro-subtitle">
                    CREACIONES & DISEÑO
                </span>

                <h2>
                    Crea tu cuenta
                </h2>

                <p>
                    Regístrate para disfrutar de nuestros
                    productos personalizados y gestionar
                    tus pedidos.
                </p>

            </div>


            <form
                className="registro-form"
                onSubmit={manejarEnvio}
            >

                <div className="form-row">

                    <div className="form-group">

                        <label htmlFor="nombre">
                            Nombre
                        </label>

                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            value={formulario.nombre}
                            onChange={manejarCambio}
                            required
                        />

                    </div>


                    <div className="form-group">

                        <label htmlFor="apellido">
                            Apellido
                        </label>

                        <input
                            id="apellido"
                            name="apellido"
                            type="text"
                            placeholder="Ingresa tu apellido"
                            value={formulario.apellido}
                            onChange={manejarCambio}
                            required
                        />

                    </div>

                </div>


                <div className="form-group">

                    <label htmlFor="correo">
                        Correo electrónico
                    </label>

                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        placeholder="ejemplo@correo.com"
                        value={formulario.correo}
                        onChange={manejarCambio}
                        required
                    />

                </div>


                <div className="form-group">

                    <label htmlFor="password">
                        Contraseña
                    </label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Ingresa una contraseña"
                        value={formulario.password}
                        onChange={manejarCambio}
                        required
                    />

                </div>


                <button
                    className="registro-button"
                    type="submit"
                    disabled={guardando}
                >

                    {guardando
                        ? "Registrando..."
                        : "Crear cuenta"
                    }

                </button>


                {mensaje && (

                    <div className="mensaje-exito">
                        {mensaje}
                    </div>

                )}


                {error && (

                    <div className="mensaje-error">
                        {error}
                    </div>

                )}

            </form>

        </div>
    );
}

export default UsuarioForm;