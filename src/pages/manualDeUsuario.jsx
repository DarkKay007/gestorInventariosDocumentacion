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
                    <li className="mb-2">El sistema debe permitir al usuario la búsqueda de productos por nombre.</li>
                    <li className="mb-2">El sistema debe permitir al administrador un mecanismo para visualizar la lista completa de productos en el inventario, mostrando el precio de cada uno.</li>
                    <li className="mb-2">El sistema debe permitir al administrador implementar un sistema de autenticación y autorización para garantizar que solo usuarios autorizados puedan acceder y modificar el inventario.</li>
                    <li className="mb-2">El sistema debe permitir al Usuario cerrar sesión.</li>
                    <li className="mb-2">El sistema debe permitir al administrador acceder a una opción para visualizar las existencias de productos.</li>
                    <li className="mb-2">El sistema debe permitir al empleado generar informes.</li>
                    <li className="mb-2">El sistema debe permitir al usuario una interfaz intuitiva y fácil de usar, con opciones de navegación claramente definidas.</li>
                    <li className="mb-2">El sistema debe permitir a la página ser desplegada en distintas páginas web.</li>
                    <li className="mb-2">El sistema debe permitir al administrador un sistema de respaldo y recuperación de datos para garantizar la integridad y disponibilidad de la información en caso de fallos o pérdidas de datos.</li>
                    <li className="mb-2">El sistema debe permitir al administrador implementar un sistema de notificaciones para alertar a los usuarios sobre eventos importantes, como niveles críticos de existencias o transacciones pendientes de aprobación.</li>
                    <li className="mb-2">El sistema debe permitir al administrador asignar roles y permisos a los usuarios, limitando el acceso a ciertas funcionalidades del sistema según sus responsabilidades.</li>
                    <li className="mb-2">El sistema debe permitir al administrador acceder a un sistema que cumpla con los estándares de seguridad de la industria para proteger la información confidencial del inventario.</li>
                    <li className="mb-2">El sistema debe permitir al administrador realizar un seguimiento del historial de precios de los productos, mostrando las fechas y razones de las modificaciones.</li>
                    <li className="mb-2">El sistema debe permitir al administrador proporcionar una función de escaneo de códigos de barras para agilizar el registro y la búsqueda de productos.</li>
                    <li className="mb-2">El sistema debe permitir al administrador crear etiquetas personalizadas para los productos, facilitando su identificación y clasificación en el inventario.</li>
                    <li className="mb-2">El sistema debe permitir al administrador la creación de kits o conjuntos de productos, con la capacidad de gestionar las existencias de cada componente individualmente.</li>
                    <li className="mb-2">El sistema debe permitirle al administrador realizar un seguimiento del ciclo de vida de los productos, desde su ingreso al inventario hasta su eventual eliminación.</li>
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
