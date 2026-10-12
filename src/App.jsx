

import { useEffect, useState } from "react";

// Servicios para comunicarnos con el backend.
import { listarUsuarios } from "./services/usuarioService";

// Componentes de la aplicación.
import UsuarioForm from "./components/UsuarioForm";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./components/Cart";

// Estilos generales de la aplicación.
import "./App.css";


function App() {

  // ==========================================
  // ESTADO DE USUARIOS
  // ==========================================

  const [usuarios, setUsuarios] = useState([]);

  const [cargando, setCargando] = useState(true);

  const [error, setError] = useState("");


  // ==========================================
  // ESTADO DEL CARRITO
  // ==========================================

  const [carrito, setCarrito] = useState([]);


  // ==========================================
  // CARGAR USUARIOS DESDE EL BACKEND
  // ==========================================

  async function cargarUsuarios() {

    try {

      setCargando(true);

      setError("");

      const datos = await listarUsuarios();

      setUsuarios(datos);

    } catch (error) {

      console.error(
        "Error al cargar usuarios:",
        error
      );

      setError(
        "No fue posible cargar los usuarios."
      );

    } finally {

      setCargando(false);
    }
  }


  // ==========================================
  // EJECUTAR AL CARGAR LA APLICACIÓN
  // ==========================================

  useEffect(() => {

    cargarUsuarios();

  }, []);


  // ==========================================
  // AGREGAR PRODUCTO AL CARRITO
  // ==========================================

  function agregarAlCarrito(producto) {

    setCarrito((carritoActual) => {

      // Buscar si el producto ya existe.
      const productoExistente =
        carritoActual.find(
          (item) =>
            item.id === producto.id
        );


      // Si ya existe, aumentar cantidad.
      if (productoExistente) {

        return carritoActual.map(
          (item) =>
            item.id === producto.id
              ? {
                ...item,
                cantidad:
                  item.cantidad + 1
              }
              : item
        );
      }


      // Si es un producto nuevo,
      // agregarlo con cantidad 1.
      return [
        ...carritoActual,

        {
          ...producto,
          cantidad: 1
        }
      ];
    });
  }


  // ==========================================
  // ELIMINAR PRODUCTO DEL CARRITO
  // ==========================================

  function eliminarDelCarrito(id) {

    setCarrito((carritoActual) =>
      carritoActual.filter(
        (producto) =>
          producto.id !== id
      )
    );
  }


  // ==========================================
  // CAMBIAR CANTIDAD DEL PRODUCTO
  // ==========================================

  function cambiarCantidad(
    id,
    nuevaCantidad
  ) {

    // Si la cantidad llega a cero,
    // eliminamos el producto.
    if (nuevaCantidad <= 0) {

      eliminarDelCarrito(id);

      return;
    }


    setCarrito((carritoActual) =>
      carritoActual.map(
        (producto) =>
          producto.id === id
            ? {
              ...producto,
              cantidad:
                nuevaCantidad
            }
            : producto
      )
    );
  }


  // ==========================================
  // INTERFAZ
  // ==========================================

  return (

    <>

      {/* Barra de navegación */}
      <Navbar />


      {/* Página principal */}
      <Home />


      {/* Catálogo de productos */}
      <Products
        onAgregar={agregarAlCarrito}
      />


      {/* ==================================
                CARRITO DE COMPRAS
            ================================== */}

      <Cart
        carrito={carrito}
        onEliminar={eliminarDelCarrito}
        onCambiarCantidad={cambiarCantidad}
      />


      {/* ==================================
                SECCIÓN DE USUARIOS
            ================================== */}

      <main>

        <section
          id="usuarios"
          className="usuarios-section"
        >

          {/* Formulario de registro */}
          <UsuarioForm
            onUsuarioRegistrado={
              cargarUsuarios
            }
          />


          <hr />


          {/* Lista de usuarios */}
          <div className="usuarios-lista">

            <h2>
              Usuarios registrados
            </h2>


            {/* Cargando */}
            {cargando && (

              <p>
                Cargando usuarios...
              </p>

            )}


            {/* Error */}
            {error && (

              <p>
                {error}
              </p>

            )}


            {/* Usuarios cargados */}
            {!cargando &&
              !error && (

                usuarios.length === 0 ? (

                  <p>
                    No hay usuarios
                    registrados.
                  </p>

                ) : (

                  <ul>

                    {usuarios.map(
                      (usuario) => (

                        <li
                          key={
                            usuario.id
                          }
                        >

                          <strong>

                            {
                              usuario.nombre
                            }

                            {" "}

                            {
                              usuario.apellido
                            }

                          </strong>

                          {" - "}

                          {
                            usuario.correo
                          }

                        </li>

                      )
                    )}

                  </ul>

                )
              )}

          </div>

        </section>

      </main>


      {/* ==================================
                PIE DE PÁGINA
            ================================== */}

      <footer id="contacto">

        <p>
          © 2026 Creaciones & Diseño
        </p>

      </footer>

    </>
  );
}


// Exportamos el componente principal.
export default App;