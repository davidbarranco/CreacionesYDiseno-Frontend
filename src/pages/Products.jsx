// Importamos el componente que representa cada producto.
import ProductCard from "../components/ProductCard";

// Importamos las cuatro imágenes desde la carpeta assets.
import camisa1 from "../assets/camisa 1.jpg";
import camisa2 from "../assets/camisa 2.jpg";
import camisa3 from "../assets/camisa 3.jpg";



function Products({ onAgregar }) {

    // Lista de productos que aparecerán en el catálogo.
    const productos = [

        {
            id: 1,

            nombre: "Camiseta Personalizada",

            categoria: "Camisetas",

            descripcion:
                "Camiseta personalizada ideal para expresar tu estilo.",

            precio: 34500,

            imagen: camisa1
        },

        {
            id: 2,

            nombre: "Camiseta Premium",

            categoria: "Camisetas Premium",

            descripcion:
                "Camiseta premium con excelente calidad y acabado.",

            precio: 37500,

            imagen: camisa2
        },

        {
            id: 3,

            nombre: "Camiseta DTF",

            categoria: "Personalizadas",

            descripcion:
                "Diseños personalizados mediante impresión DTF.",

            precio: 30000,

            imagen: camisa3
        },


    ];


    return (

        <section
            id="productos"
            className="productos-section"
        >

            {/* Encabezado del catálogo */}
            <div className="productos-header">

                <span>
                    NUESTROS PRODUCTOS
                </span>

                <h2>
                    Diseña algo único
                </h2>

                <p>
                    Elige tu producto favorito y
                    personalízalo a tu estilo.
                </p>

            </div>


            {/* Contenedor de las tarjetas */}
            <div className="productos-grid">

                {productos.map((producto) => (

                    <ProductCard
                        key={producto.id}
                        producto={producto}
                        onAgregar={onAgregar}
                    />

                ))}

            </div>

        </section>
    );
}

export default Products;