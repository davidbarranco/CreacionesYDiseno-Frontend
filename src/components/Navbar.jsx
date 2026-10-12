

function Navbar() {
    return (
        <nav className="navbar">

            <div className="navbar-logo">
                Creaciones & Diseño
            </div>

            <ul className="navbar-menu">

                <li>
                    <a href="#inicio">
                        Inicio
                    </a>
                </li>

                <li>
                    <a href="#usuarios">
                        Usuarios
                    </a>
                </li>

                <li>
                    <a href="#contacto">
                        Contacto
                    </a>
                </li>

            </ul>

        </nav>
    );
}

export default Navbar;