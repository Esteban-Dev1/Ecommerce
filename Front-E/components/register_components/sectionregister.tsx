import React, { useState } from "react";
import Link from "next/link";

const RegisterSection: React.FC = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleNombreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNombre(e.target.value);
        setError("");
    };

    const handleApellidoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setApellido(e.target.value);
        setError("");
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
        setError("");
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setError("");
    };

    const validateForm = (e: React.FormEvent) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Por favor, introduce un correo electrónico válido.");
            return;
        }

        if (password.length < 6) {
            setError("La contraseña debe tener al menos 6 caracteres.");
            return;
        }

        setError("");
        // Aquí puedes enviar el formulario o realizar otras acciones
    };

    return (
        <section className="w-full h-screen flex items-center justify-center bg-gray-200">
            <div
                className="relative w-full max-w-md p-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 rounded-lg"
            >
                <div className="relative z-10 p-6 bg-white rounded-lg">
                    <form onSubmit={validateForm} className="space-y-4">
                        <h1 className="text-2xl font-semibold text-center">Registrar Cuenta</h1>
                        <p className="text-gray-600">Por favor complete la siguiente información:</p>
                        <div>
                            <label htmlFor="nombre" className="block text-left text-gray-700">Nombres</label>
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                placeholder="Ingresa tu Nombre"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:shadow-lg transition duration-200 ease-in-out"
                                value={nombre}
                                onChange={handleNombreChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="apellido" className="block text-left text-gray-700">Apellidos</label>
                            <input
                                id="apellido"
                                name="apellido"
                                type="text"
                                placeholder="Ingresa tu Apellido"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:shadow-lg transition duration-200 ease-in-out"
                                value={apellido}
                                onChange={handleApellidoChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-left text-gray-700">Correo Electrónico</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Ingresa tu correo electrónico"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:shadow-lg transition duration-200 ease-in-out"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="password" className="text-gray-700">Contraseña</label>
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Ingresa tu contraseña"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:shadow-lg transition duration-200 ease-in-out"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                        </div>

                        {error && (
                            <div className="p-2 bg-red-100 text-red-600 rounded-md border border-red-300 text-sm">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="relative w-full py-2 bg-white text-black rounded-md overflow-hidden transition duration-300 ease-in-out 
                            transform hover:text-white hover:bg-white border border-emerald-500 hover:border-transparent
                            before:absolute before:inset-0 before:bg-emerald-500 before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100"
                        >
                            <span className="relative z-10">Registrar Cuenta</span>
                        </button>
                    </form>

                    <p className="mt-4 text-gray-600">
                        ¿Ya tienes una cuenta? <Link href="/login" className="text-emerald-500 hover:underline">Inicia Sesión</Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default RegisterSection;
