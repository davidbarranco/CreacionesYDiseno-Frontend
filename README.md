 React + Vit


# Creaciones & Diseño

Aplicación web desarrollada con React y Vite para el proyecto Creaciones & Diseño.

El sistema permite visualizar productos personalizados, agregarlos a un carrito de compras y registrar usuarios mediante una API conectada a un backend desarrollado con Java, Tomcat y MySQL.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Java Servlet
- Apache Tomcat
- MySQL
- Git
- GitHub

## Funcionalidades

- Página principal de Creaciones & Diseño.
- Navegación entre secciones.
- Catálogo de productos personalizados.
- Visualización de imágenes de productos.
- Agregar productos al carrito.
- Aumentar y disminuir cantidades.
- Eliminar productos del carrito.
- Cálculo automático del total.
- Formulario de registro de usuarios.
- Conexión con API mediante Fetch.
- Consulta de usuarios registrados.
- Integración con backend Java y MySQL.

## Estructura principal

```text
src/
├── api/
│   └── apiClient.js
├── assets/
├── components/
│   ├── Cart.jsx
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   └── UsuarioForm.jsx
├── pages/
│   ├── Home.jsx
│   └── Products.jsx
├── services/
│   └── usuarioService.js
├── App.jsx
├── App.css
└── main.jsx
