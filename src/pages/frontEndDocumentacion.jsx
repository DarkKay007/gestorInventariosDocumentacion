import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const FrontendDocumentation = () => {
  return (
    <div className="bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-purple-500 mb-8">DOCUMENTACIÓN FRONTEND</h1>

      <Section title="controller.compras.js">
        <p>Este archivo es responsable de manejar las solicitudes relacionadas con las compras en la aplicación.</p>
        <SubSection title="Función compras">
          <p>Realiza una solicitud a una API de compras y renderiza una vista con los datos obtenidos.</p>
        </SubSection>
      </Section>

      <Section title="controller.dash.js">
        <p>Este archivo controla las acciones relacionadas con el panel de control de la aplicación.</p>
        <SubSection title="Función mostrarDash">
          <p>Valida el token de usuario y, si el usuario está autenticado, renderiza el panel de control. De lo contrario, redirecciona al usuario a la página de inicio de sesión.</p>
        </SubSection>
      </Section>

      <Section title="controller.detallecompra.js">
        <p>Este archivo maneja las solicitudes relacionadas con los detalles de las compras.</p>
        <SubSection title="Función detalle">
          <p>Hace una solicitud a una API para obtener los detalles de una compra y renderiza una vista con los datos obtenidos.</p>
        </SubSection>
      </Section>

      <Section title="controller.productos.js">
        <p>Este archivo es responsable de manejar las solicitudes relacionadas con los productos en la aplicación.</p>
        <SubSection title="Función productos">
          <p>Realiza una solicitud a una API de productos y renderiza una vista con los datos obtenidos.</p>
        </SubSection>
        <SubSection title="Función registrarProductos">
          <p>Renderiza una vista para registrar nuevos productos.</p>
        </SubSection>
      </Section>

      <Section title="controller.usuario.js">
        <p>Este archivo controla las acciones relacionadas con los usuarios en la aplicación.</p>
        <SubSection title="Función listarUsuario">
          <p>Hace una solicitud para obtener la lista de usuarios y renderiza una vista con los datos obtenidos.</p>
        </SubSection>
        <SubSection title="Función registrarUsuario">
          <p>Renderiza una vista para registrar nuevos usuarios.</p>
        </SubSection>
        <SubSection title="Función ValidarToken">
          <p>Valida el token de usuario.</p>
        </SubSection>
        <SubSection title="Función salirUsuario">
          <p>Redirecciona al usuario a la página de inicio de sesión.</p>
        </SubSection>
      </Section>

      <Section title="controller.informe.js">
        <p>Este archivo está encargado de generar informes en formato PDF.</p>
        <SubSection title="Función generar">
          <p>Genera un informe en PDF a partir de los datos proporcionados y lo abre en una nueva ventana.</p>
        </SubSection>
      </Section>

      <Section title="login.css">
        <p>Archivo de estilos para la página de inicio de sesión.</p>
      </Section>

      <Section title="login.js">
        <p>Contiene funciones relacionadas con la página de inicio de sesión, como enviar datos de inicio de sesión al servidor y manejar la respuesta.</p>
      </Section>

      <Section title="main.js">
        <p>Contiene funciones JavaScript adicionales utilizadas en diferentes partes de la aplicación.</p>
        <SubSection title="Función eliminarProducto(event)">
          <p>Muestra un mensaje de confirmación utilizando SweetAlert al intentar eliminar un producto. Si el usuario confirma, llama a <code>borrarProducto(event)</code> para realizar la eliminación del producto. Luego muestra un mensaje de éxito y recarga la página.</p>
        </SubSection>
        <SubSection title="Función salirUsuario">
          <p>Cierra la sesión del usuario, borra el token de acceso almacenado en las cookies y redirige al usuario a la página de inicio de sesión.</p>
        </SubSection>
        <SubSection title="Función registrarProductos">
          <p>Registra un nuevo producto obteniendo los datos del formulario de registro, incluido el token de acceso del usuario almacenado en las cookies. Realiza una solicitud POST a la API de productos para agregar el nuevo producto, muestra un mensaje de éxito y recarga la página.</p>
        </SubSection>
        <SubSection title="Función comprarProducto">
          <p>Realiza la compra de un producto obteniendo los datos del formulario de compra, incluido el token de acceso del usuario almacenado en las cookies. Realiza una solicitud PUT a la API de productos para actualizar el stock del producto comprado, muestra un mensaje de éxito, genera una factura en formato PDF y recarga la página.</p>
        </SubSection>
        <SubSection title="Función cargarCompra(event)">
          <p>Carga los detalles de un producto en el formulario de compra cuando se hace clic en un botón "Comprar".</p>
        </SubSection>
        <SubSection title="Función modificarProducto">
          <p>Modifica un producto existente obteniendo los datos del formulario de modificación, incluido el token de acceso del usuario almacenado en las cookies. Realiza una solicitud PUT a la API de productos para actualizar los detalles del producto, muestra un mensaje de éxito y recarga la página.</p>
        </SubSection>
        <SubSection title="Función reporte(event)">
          <p>Genera un informe en formato PDF para un producto específico, obteniendo los detalles del producto seleccionado y abriendo una nueva ventana con la URL para generar el informe.</p>
        </SubSection>
      </Section>

      <Section title="login.html">
        <p>Contiene la estructura HTML de la página de inicio de sesión de la aplicación.</p>
        <p>Incluye un formulario para iniciar sesión y otro para registrarse. Utiliza AlertifyJS para mostrar mensajes de alerta al usuario. Los campos del formulario incluyen entrada de correo electrónico y contraseña.</p>
      </Section>

      <Section title="index.js">
        <p>Define las rutas principales de la aplicación, importando y montando las rutas relacionadas con el usuario, el panel de control, los productos, las compras y los detalles de compra.</p>
      </Section>

      <Section title="routes.compras.js, routes.dash.js, routes.detallecompra.js">
        <p>Definen las rutas específicas relacionadas con las compras, el panel de control y los detalles de compra de la aplicación, exportando rutas específicas definidas utilizando Express Router.</p>
      </Section>

      <Section title="partials.dash.body.ejs">
        <p>Una plantilla parcial que define la estructura y el contenido del cuerpo de la página para la parte de administración del sistema (dash). Contiene estilos CSS y un div principal con un mensaje de bienvenida con un título y un párrafo, además de un footer.</p>
      </Section>

      <Section title="partials.dash.footer.ejs">
        <p>Define el pie de página de la página de administración, conteniendo información sobre la versión y los derechos de autor.</p>
      </Section>

      <Section title="partials.dash.header.ejs">
        <p>Define la cabecera de la página de administración, incluyendo un logo, un menú de navegación y un área para el usuario autenticado donde se muestra su nombre y una opción para salir.</p>
      </Section>

      <Section title="views.compras.ejs">
        <p>Muestra una lista de compras en una tabla HTML, utilizando las plantillas parciales para la cabecera y el pie de página.</p>
      </Section>

      <Section title="views.dash.ejs">
        <p>La página principal del panel de administración, utilizando las plantillas parciales para la cabecera, el cuerpo y el pie de página.</p>
      </Section>

      <Section title="views.dash.detallecompra.ejs">
        <p>Muestra los detalles de una compra específica en una tabla HTML, utilizando las plantillas parciales para la cabecera y el pie de página.</p>
      </Section>

      <Section title="views.productos.ejs">
        <p>Muestra una lista de productos, utilizando bucles para iterar sobre los datos de los productos y generar filas de una tabla HTML. También incluye modalidades para modificar y comprar productos.</p>
      </Section>

      <Section title="views/registro/productos.ejs">
        <p>Un formulario de registro de productos, permitiendo a los usuarios ingresar detalles sobre un nuevo producto como nombre, color, precio y stock.</p>
      </Section>

      <Section title="views/usuario.ejs">
        <p>Muestra una lista de usuarios y sus detalles, como nombre de usuario, correo electrónico y roles. También incluye modalidades para modificar y eliminar usuarios.</p>
      </Section>

      <Section title="views/usuario/registro.ejs">
        <p>Un formulario de registro de usuarios, permitiendo a los administradores crear nuevos usuarios proporcionando detalles como nombre de usuario, correo electrónico, contraseña y roles.</p>
      </Section>

      <Section title="server.js">
        <p>El punto de entrada de la aplicación del servidor Node.js. Configura Express, establece EJS como el motor de plantillas, define las rutas y establece la configuración del puerto del servidor.</p>
      </Section>

      <Section title=".babelrc">
        <p>Archivo de configuración de Babel para transpilar el código JavaScript a una versión compatible en Node.js.</p>
      </Section>

      <Section title="dash">
        <p>La carpeta Dash usada en este proyecto es una plantilla descargada desde la web.</p>
      </Section>

      <Section title="img">
        <p>En la carpeta img se importan las imágenes para usar en los diferentes componentes de la web.</p>
      </Section>


      <div className="flex justify-center">
        <Button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg">
          <Link to="/" className="text-white">
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold text-purple-400 mb-4">{title}</h2>
    {children}
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="ml-4 mb-4">
    <h3 className="text-xl font-medium text-purple-300 mb-2">{title}</h3>
    {children}
  </div>
);

export default FrontendDocumentation;
