import { Button } from 'flowbite-react';
import React from 'react';

const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-800">
            <header className="bg-blue-600 text-white py-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold">Documentación del Proyecto</h1>
                    <p className="text-xl mt-2">Encuentra toda la información necesaria sobre el Backend, Frontend y el Manual de Usuario</p>
                </div>
            </header>

            <main className="container mx-auto py-8 px-4">
                <section className="mb-12">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-4">¿Qué documentación estás buscando?</h2>
                        <p className="text-lg text-gray-600 mb-6">Selecciona una de las siguientes secciones para acceder a la documentación detallada.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Backend</h3>
                            <p className="text-gray-700 mb-4">Accede a la documentación completa del Backend, incluyendo controladores, rutas, middlewares y más.</p>
                            <Button href="/backend-documentation" className='bg-green-900'>Ver Documentación</Button>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Manual de Usuario</h3>
                            <p className="text-gray-700 mb-4">Consulta el Manual de Usuario para aprender a utilizar todas las funcionalidades de la aplicación.</p>
                            <Button href="/user-manual" className='bg-green-900'>Ver Manual</Button>
                        </div>

                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-4">Frontend</h3>
                            <p className="text-gray-700 mb-4">Explora la documentación del Frontend para entender la estructura, componentes y estilos de la aplicación.</p>
                            <Button href="/frontend-documentation" className='bg-green-900'>Ver Documentación</Button>
                        </div>

                    </div>
                </section>
                
            </main>

            <footer className=" bottom-0  bg-gray-800 text-white py-4 ">
                <div className="container mx-auto text-center">
                    <p className="text-sm">&copy; 2024 Proyecto de Documentación. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default HomePage;
