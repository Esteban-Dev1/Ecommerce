import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
const LoginSection: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showRecovery, setShowRecovery] = useState(false);

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
    };

    return (
        <section className="w-full h-screen flex items-center justify-center bg-gray-200">
            <div className="relative w-full max-w-md p-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 rounded-lg">
                <div className="relative z-10 p-6 bg-white rounded-lg overflow-hidden">
                    {/* Transición para el formulario de inicio de sesión */}
                    <Transition
                        show={!showRecovery}
                        enter="transition-opacity duration-[3000ms] ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-[3000ms] ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        {/* Contenedor que aplica la clase */}
                        <div className={`${showRecovery ? 'hidden' : 'block'}`}>
                            <form onSubmit={validateForm} className="space-y-4">
                                <h1 className="text-2xl font-semibold text-center">Iniciar Sesión</h1>
                                <p className="text-gray-600">Por favor introduzca su email y contraseña</p>

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
                                        <button
                                            type="button"
                                            onClick={() => setShowRecovery(true)}
                                            className="text-sm text-emerald-500 hover:underline"
                                        >
                                            ¿Olvidó su contraseña?
                                        </button>
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
                                    <span className="relative z-10">Iniciar Sesión</span>
                                </button>
                            </form>
							  <p className="mt-4 text-gray-600">
                        ¿No tienes una cuenta? <Link href="./register" className="text-emerald-500 hover:underline">Regístrate</Link>
                    </p>
                        </div>
                    </Transition>

                    {/* Transición para el formulario de recuperación de contraseña */}
                    <Transition
                        show={showRecovery}
                        enter="transition-opacity duration-[3000ms] ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-[3000ms] ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        {/* Contenedor que aplica la clase */}
                        <div className={`${!showRecovery ? 'hidden' : 'block'}`}>
                            <div className="space-y-4 text-center">
                                <h1 className="text-2xl font-semibold">Recuperar Contraseña</h1>
                                <p className="text-gray-600">Por favor introduzca su email:</p>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-300 focus:shadow-lg transition duration-200 ease-in-out"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                                <button
                                    type="submit"
                                    className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
                                >
                                    Recuperar
                                </button>
                                <p className="mt-4 text-gray-600">
                                    ¿Recordó su contraseña?{" "}
                                    <button
                                        type="button"
                                        onClick={() => setShowRecovery(false)}
                                        className="text-emerald-500 hover:underline"
                                    >
                                        Volver a Inicio de sesión
                                    </button>
                                </p>
                            </div>
                        </div>
                    </Transition>
                </div>
            </div>
        </section>
    );
};

export default LoginSection;
