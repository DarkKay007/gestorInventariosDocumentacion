import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const UserManual = () => {
    return (
        <div className="bg-black text-white p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-purple-500 mb-4">Manual de Usuario</h1>
                <h2 className="text-2xl font-semibold text-purple-400 mb-2">GESTOR DE INVENTARIO (CrochetSM)</h2>
                <div className="text-lg text-purple-300">
                    <p>Skarlett Valentina Medina Castaño</p>
                    <p>Centro del Diseño y Manufactura del Cuero SENA</p>
                    <p>2842515: Programación de Software</p>
                    <p>Guillermo de La Peña</p>
                    <p>31 de mayo del 2024</p>
                </div>
            </header>

            <section className="mb-8">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Objetivo General</h3>
                <p className="text-purple-300">
                    Cumplir las tareas relacionadas con la gestión de productos, desde su registro inicial hasta su eventual eliminación del inventario. El objetivo principal es mejorar la eficiencia en la gestión de los recursos de la empresa, minimizando los errores asociados con la manipulación manual de datos y garantizando un registro actualizado y preciso de las existencias disponibles en todo momento. Además, el sistema busca agilizar el proceso de búsqueda de productos, permitiendo a los usuarios localizar rápidamente los elementos necesarios dentro del inventario. En resumen, el objetivo general es proporcionar una herramienta efectiva que optimice la gestión del inventario, contribuyendo así a una operación más eficiente y rentable de la empresa.
                </p>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Objetivos Específicos</h3>
                <ul className="list-disc list-inside text-purple-300">
                    <li className="mb-2">Automatización de Procesos: Implementar funcionalidades que permitan automatizar los procesos de registro, edición y eliminación de productos en el inventario, reduciendo la dependencia de métodos manuales y minimizando la posibilidad de errores en la manipulación de datos.</li>
                    <li className="mb-2">Optimización de la Búsqueda de Productos: Desarrollar un sistema de búsqueda eficiente que permita a los usuarios encontrar rápidamente productos dentro del inventario, utilizando criterios como nombre, categoría, proveedor, etc.</li>
                    <li className="mb-2">Control Preciso de Existencias: Implementar un sistema de control de existencias que mantenga actualizado en tiempo real el nivel de stock de cada producto, permitiendo generar alertas cuando las existencias alcancen niveles mínimos predefinidos.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-semibold text-purple-400 mb-2">Requerimientos</h3>
                <ul className="list-decimal list-inside text-purple-300">
                    <li className="mb-2">El sistema debe permitir al administrador el registro de nuevos productos.</li>
<li className="mb-2">El sistema debe permitir al administrador editar la información de los productos registrados.</li>
<li className="mb-2">El sistema debe permitir al administrador la capacidad de eliminar productos del inventario, con la opción de confirmación para evitar eliminaciones accidentales.</li>
<li className="mb-2">El sistema debe permitir al administrador el registro de nuevos usuarios.</li>
<li className="mb-2">El sistema debe permitir al administrador editar la información de los usuarios registrados.</li>
<li className="mb-2">El sistema debe permitir al administrador eliminar la información de los usuarios registrados, con la opción de confirmación para evitar eliminaciones accidentales.</li>
<li className="mb-2">El sistema debe permitir al usuario visualizar los productos registrados con sus precios.</li>
<li className="mb-2">El sistema debe permitir visualizar en la parte superior derecha el email de la persona registrada.</li>
<li className="mb-2">El sistema debe permitir desplegar la barra de opciones ubicada en la parte izquierda.</li>
<li className="mb-2">El sistema debe permitir acceder a la documentación de la página ubicada en el pie de la página.</li>
<li className="mb-2">El sistema debe permitir al administrador un mecanismo para visualizar la lista completa de productos en el inventario.</li>
<li className="mb-2">El sistema debe permitir que una persona no registrada pueda hacerlo desde el login.</li>
<li className="mb-2">El sistema debe permitir al administrador implementar un sistema de autenticación y autorización para garantizar que solo usuarios autorizados puedan acceder y modificar el inventario.</li>
<li className="mb-2">El sistema debe permitir al usuario cerrar sesión.</li>
<li className="mb-2">El sistema debe permitir al administrador acceder a una opción para visualizar las existencias de productos.</li>
<li className="mb-2">El sistema debe permitir al usuario generar una factura.</li>
<li className="mb-2">El sistema debe permitir al usuario una interfaz intuitiva y fácil de usar, con opciones de navegación claramente definidas.</li>
<li className="mb-2">El sistema debe permitir a la página ser desplegada en distintas páginas web.</li>
<li className="mb-2">El sistema debe permitir al administrador asignar roles y permisos a los usuarios, limitando el acceso a ciertas funcionalidades del sistema según sus responsabilidades.</li>
<li className="mb-2">El sistema debe requerir de un "@" para los campos Email </li>
                </ul>
            </section>
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

export default UserManual;
