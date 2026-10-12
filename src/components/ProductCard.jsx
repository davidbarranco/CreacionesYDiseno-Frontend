

function ProductCard({ producto, onAgregar }) {

    return (
        <article className="producto-card">

            <div className="producto-imagen">
                <img
                    src={producto.imagen}
                    alt={producto.nombre}
                />
            </div>

            <div className="producto-info">

                <span className="producto-categoria">
                    {producto.categoria}
                </span>

                <h3>
                    {producto.nombre}
                </h3>

                <p className="producto-descripcion">
                    {producto.descripcion}
                </p>

                <div className="producto-footer">

                    <strong className="producto-precio">
                        ${producto.precio.toLocaleString("es-CO")}
                    </strong>

                    <button
                        className="producto-button"
                        onClick={() => onAgregar(producto)}
                    >
                        Agregar
                    </button>

                </div>

            </div>

        </article>
    );
}

export default ProductCard;