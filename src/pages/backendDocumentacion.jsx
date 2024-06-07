import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const BackendDocumentation = () => {
  return (
    <div className="bg-black text-white p-8">
      <h1 className="text-4xl font-bold text-purple-500 mb-8">Backend Documentacion</h1>

      <Section title="Archivo controller.compras.js">
        <p>Este archivo contiene controladores para las operaciones relacionadas con compras en la base de datos.</p>

        <SubSection title="Función crearCompra">
          <p>crearCompra es un controlador para agregar una nueva compra a la base de datos.</p>
          <ul>
            <li>Toma los datos de compra del cuerpo de la solicitud.</li>
            <li>Convierte la fecha de compra al formato MySQL.</li>
            <li>Realiza una inserción en la tabla compras con los datos proporcionados.</li>
            <li>Devuelve una respuesta JSON indicando si la compra se realizó correctamente o no.</li>
          </ul>
        </SubSection>

        <SubSection title="Función mostrarCompra">
          <p>mostrarCompra recupera una compra específica de la base de datos según su ID.</p>
          <ul>
            <li>Toma el ID de la compra de los parámetros de la solicitud.</li>
            <li>Realiza una consulta SQL para recuperar la compra correspondiente.</li>
            <li>Devuelve la compra en formato JSON.</li>
          </ul>
        </SubSection>

        <SubSection title="Función eliminarCompra">
          <p>eliminarCompra elimina una compra de la base de datos según su ID.</p>
          <ul>
            <li>Toma el ID de la compra del cuerpo de la solicitud.</li>
            <li>Ejecuta una consulta SQL para eliminar la compra de la tabla compras.</li>
            <li>Devuelve una respuesta JSON indicando si la compra se eliminó correctamente o no.</li>
          </ul>
        </SubSection>

        <SubSection title="Función listarCompra">
          <p>listarCompra recupera todas las compras de la base de datos.</p>
          <ul>
            <li>Realiza una consulta SQL para seleccionar todas las compras de la tabla compras.</li>
            <li>Devuelve todas las compras en formato JSON.</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Archivo controller.detallecompra.js">
        <p>Este archivo contiene controladores para las operaciones relacionadas con los detalles de las compras en la base de datos.</p>

        <SubSection title="Función crearDetalles">
          <p>crearDetalles es un controlador para agregar nuevos detalles de compra a la base de datos.</p>
          <ul>
            <li>Toma los datos de los detalles de compra del cuerpo de la solicitud.</li>
            <li>Realiza una inserción en la tabla detalle_compra con los datos proporcionados.</li>
            <li>Devuelve una respuesta JSON indicando si los detalles se insertaron correctamente o no.</li>
          </ul>
        </SubSection>

        <SubSection title="Función mostrarDetalles">
          <p>mostrarDetalles recupera detalles de compra específicos de la base de datos según su ID.</p>
          <ul>
            <li>Toma el ID de los detalles de la compra de los parámetros de la solicitud.</li>
            <li>Realiza una consulta SQL para recuperar los detalles de compra correspondientes.</li>
            <li>Devuelve los detalles de compra en formato JSON.</li>
          </ul>
        </SubSection>

        <SubSection title="Función listarDetalles">
          <p>listarDetalles recupera todos los detalles de compra de la base de datos.</p>
          <ul>
            <li>Realiza una consulta SQL para seleccionar todos los detalles de compra de la tabla detalle_compra.</li>
            <li>Devuelve todos los detalles de compra en formato JSON.</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Archivo controller.productos.js">
        <p>Este archivo contiene controladores para las operaciones relacionadas con los productos en la base de datos.</p>

        <SubSection title="Función crearProductos">
          <p>crearProductos es un controlador para agregar nuevos productos a la base de datos.</p>
          <ul>
            <li>Toma los datos del producto del cuerpo de la solicitud.</li>
            <li>Realiza una inserción en la tabla productos con los datos proporcionados.</li>
            <li>Devuelve una respuesta JSON indicando si el producto se insertó correctamente o no.</li>
          </ul>
        </SubSection>

        <SubSection title="Función mostrarProductos">
          <p>mostrarProductos recupera un producto específico de la base de datos según su ID.</p>
          <ul>
            <li>Toma el ID del producto de los parámetros de la solicitud.</li>
            <li>Realiza una consulta SQL para recuperar el producto correspondiente.</li>
            <li>Devuelve el producto en formato JSON.</li>
          </ul>
        </SubSection>

        <SubSection title="Función actualizarProductos">
          <p>actualizarProductos actualiza un producto en la base de datos según su ID.</p>
          <ul>
            <li>Toma los nuevos datos del producto del cuerpo de la solicitud.</li>
            <li>Ejecutes una consulta SQL para actualizar el producto en la tabla productos.</li>
            <li>Devuelve una respuesta JSON indicando si el producto se actualizó correctamente o no.</li>
          </ul>
        </SubSection>

        <SubSection title="Función eliminarProductos">
          <p>eliminarProductos elimina un producto de la base de datos según su ID.</p>
          <ul>
            <li>Toma el ID del producto del cuerpo de la solicitud.</li>
            <li>Ejecutes una consulta SQL para eliminar el producto de la tabla productos.</li>
            <li>Devuelve una respuesta JSON indicando si el producto se eliminó correctamente o no.</li>
          </ul>
        </SubSection>

        <SubSection title="Función listarProductos">
          <p>listarProductos recupera todos los productos de la base de datos.</p>
          <ul>
            <li>Realiza una consulta SQL para seleccionar todos los productos de la tabla productos.</li>
            <li>Devuelve todos los productos en formato JSON.</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Archivo controller.usuario.js">
        <p>Este archivo contiene controladores para las operaciones relacionadas con los usuarios en la base de datos.</p>

        <SubSection title="Función crearUsuario">
          <p>crearUsuario es un controlador para agregar nuevos usuarios a la base de datos.</p>
          <ul>
            <li>Toma los datos del usuario del cuerpo de la solicitud.</li>
            <li>Realiza una inserción en la tabla usersa con los datos proporcionados.</li>
            <li>Devuelve una respuesta JSON indicando si el usuario se insertó correctamente o no.</li>
          </ul>
        </SubSection>

        <SubSection title="Función mostrarUsuario">
          <p>mostrarUsuario recupera un usuario específico de la base de datos según su ID.</p>
          <ul>
            <li>Toma el ID del usuario de los parámetros de la solicitud.</li>
            <li>Realiza una consulta SQL para recuperar el usuario correspondiente.</li>
            <li>Devuelve el usuario en formato JSON.</li>
          </ul>
        </SubSection>

        <SubSection title="Función actualizarUsuario">
          <p>actualizarUsuario actualiza un usuario en la base de datos según su ID.</p>
          <ul>
            <li>Toma los nuevos datos del usuario del cuerpo de la solicitud.</li>
            <li>Ejecutes una consulta SQL para actualizar el usuario en la tabla usersa.</li>
            <li>Devuelve una respuesta JSON indicando si el usuario se actualizó correctamente o no.</li>
          </ul>
        </SubSection>

        <SubSection title="Función eliminarUsuario">
          <p>eliminarUsuario elimina un usuario de la base de datos según su ID.</p>
          <ul>
            <li>Toma el ID del usuario del cuerpo de la solicitud.</li>
            <li>Ejecutes una consulta SQL para eliminar el usuario de la tabla usersa.</li>
            <li>Devuelve una respuesta JSON indicando si el usuario se eliminó correctamente o no.</li>
          </ul>
        </SubSection>

        <SubSection title="Función loginUsuario">
          <p>loginUsuario realiza la autenticación de un usuario.</p>
          <ul>
            <li>Toma el correo electrónico y la contraseña del cuerpo de la solicitud.</li>
            <li>Realiza una consulta SQL para verificar las credenciales del usuario.</li>
            <li>Devuelve un token JWT si la autenticación es exitosa.</li>
          </ul>
        </SubSection>

        <SubSection title="Función listarUsuario">
          <p>listarUsuario recupera todos los usuarios de la base de datos.</p>
          <ul>
            <li>Realiza una consulta SQL para seleccionar todos los usuarios de la tabla usersa.</li>
            <li>Devuelve todos los usuarios en formato JSON.</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Archivo middlewares.usuario.js">
        <p>Este archivo contiene middleware para manejar la autenticación de usuarios.</p>

        <SubSection title="Función tokenSing">
          <p>tokenSing genera un token JWT basado en la información del usuario proporcionada.</p>
          <ul>
            <li>Devuelve un token JWT firmado.</li>
          </ul>
        </SubSection>

        <SubSection title="Función validarPermiso">
          <p>validarPermiso es un middleware para validar el token de acceso en las solicitudes.</p>
          <ul>
            <li>Verifica si el token proporcionado es válido.</li>
            <li>Permite el acceso</li>
          </ul>
        </SubSection>
      </Section>

      <Section title="Archivo index.js">
        <p>Archivo de configuración principal para inicializar el servidor Express.</p>
        <ul>
          <li>Importa la aplicación Express definida en el archivo app.js.</li>
          <li>Importa la función config del paquete dotenv, que se utiliza para cargar las variables de entorno desde un archivo .env.</li>
          <li>Carga las variables de entorno desde el archivo .env.</li>
          <li>Obtiene el número de puerto del archivo .env utilizando la variable de entorno PORT.</li>
          <li>Inicia el servidor Express para escuchar las solicitudes en el puerto especificado. Cuando el servidor se inicia correctamente, se ejecuta una función de devolución de llamada que imprime un mensaje en la consola indicando el puerto en el que se está ejecutando el servidor.</li>
        </ul>
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
    <h2 className="text-3xl font-semibold text-purple-400 mb-4">{title}</h2>
    <div className="text-gray-300">{children}</div>
  </div>
);

const SubSection = ({ title, children }) => (
  <div className="mb-4 ml-4">
    <h3 className="text-2xl font-medium text-purple-300 mb-2">{title}</h3>
    <div className="text-gray-400">{children}</div>
  </div>
);

export default BackendDocumentation;
