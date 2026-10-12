

// Componente encargado de mostrar el carrito de compras.

function Cart({ carrito, onEliminar, onCambiarCantidad }) {

    // Calculamos el total de todos los productos.
    const total = carrito.reduce(
        (acumulado, producto) =>
            acumulado + producto.precio * producto.cantidad,
        0
    );

    return (
        <section
            id="carrito"
            className="carrito-section"
        >

            <div className="carrito-header">

                <span>
                    TU COMPRA
                </span>

                <h2>
                    Carrito de compras
                </h2>

            </div>


            {carrito.length === 0 ? (

                <div className="carrito-vacio">

                    <p>
                        Tu carrito está vacío.
                    </p>

                    <p>
                        Agrega algunos productos para comenzar.
                    </p>

                </div>

            ) : (

                <div className="carrito-contenido">

                    <div className="carrito-productos">

                        {carrito.map((producto) => (

                            <article
                                className="carrito-producto"
                                key={producto.id}
                            >

                                <img
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                />


                                <div className="carrito-producto-info">

                                    <h3>
                                        {producto.nombre}
                                    </h3>

                                    <p>
                                        $
                                        {producto.precio.toLocaleString(
                                            "es-CO"
                                        )}
                                    </p>


                                    <div className="cantidad-control">

                                        <button
                                            onClick={() =>
                                                onCambiarCantidad(
                                                    producto.id,
                                                    producto.cantidad - 1
                                                )
                                            }
                                        >
                                            -
                                        </button>

                                        <span>
                                            {producto.cantidad}
                                        </span>

                                        <button
                                            onClick={() =>
                                                onCambiarCantidad(
                                                    producto.id,
                                                    producto.cantidad + 1
                                                )
                                            }
                                        >
                                            +
                                        </button>

                                    </div>

                                </div>


                                <div className="carrito-producto-total">

                                    <strong>
                                        $
                                        {(
                                            producto.precio *
                                            producto.cantidad
                                        ).toLocaleString("es-CO")}
                                    </strong>

                                    <button
                                        className="eliminar-button"
                                        onClick={() =>
                                            onEliminar(producto.id)
                                        }
                                    >
                                        Eliminar
                                    </button>

                                </div>

                            </article>

                        ))}

                    </div>


                    <aside className="carrito-resumen">

                        <h3>
                            Resumen
                        </h3>

                        <div className="carrito-total">

                            <span>
                                Total
                            </span>

                            <strong>
                                $
                                {total.toLocaleString("es-CO")}
                            </strong>

                        </div>

                        <button className="comprar-button">
                            Continuar compra
                        </button>

                    </aside>

                </div>
            )}

        </section>
    );
}

export default Cart;