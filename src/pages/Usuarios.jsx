

import { useEffect, useState } from "react";
import { obtenerUsuarios } from "../services/usuarioService";

function Usuarios() {

    // Estado donde almacenaremos los usuarios recibidos
    // desde la API de Spring Boot.
    const [usuarios, setUsuarios] = useState([]);

    // Estado para controlar el mensaje de carga.
    const [cargando, setCargando] = useState(true);

    // Estado para almacenar posibles errores.
    const [error, setError] = useState("");

    useEffect(() => {

        const cargarUsuarios = async () => {

            try {

                const data = await obtenerUsuarios();

                setUsuarios(data);

            } catch (error) {

                console.error("Error al consultar usuarios:", error);

                setError("No fue posible cargar los usuarios.");

            } finally {

                setCargando(false);
            }
        };

        cargarUsuarios();

    }, []);

    if (cargando) {
        return <p>Cargando usuarios...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section>

            <h1>Usuarios</h1>

            {usuarios.map((usuario) => (

                <article key={usuario.id}>

                    <h2>
                        {usuario.nombre} {usuario.apellido}
                    </h2>

                    <p>
                        Correo: {usuario.correo}
                    </p>

                </article>

            ))}

        </section>
    );
}

export default Usuarios;