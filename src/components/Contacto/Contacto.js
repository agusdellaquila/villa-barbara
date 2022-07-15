import React from 'react'
import '../Contacto/Contacto.css'

const Contact = () => {
    return (
        <div className="my-40 flex justify-center mx-auto bgColor p-10 min-h-screen drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <div className="mt-4 sm:mt-0 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="mb-5">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-7xl text-center font-black leading-6 text-gray-900 font-face-rage">Contacto</h3>
                            <h4 className="mt-10 text-3xl text-center text-gray-600 font-face-very">Use a permanent address where you can receive mail.</h4>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <form action="#" method="POST">
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4 py-5 bg-white sm:p-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                autoComplete="given-name"
                                                className="input border-indigo-500"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                Apellido
                                            </label>
                                            <input
                                                type="text"
                                                name="last-name"
                                                id="last-name"
                                                autoComplete="family-name"
                                                className="input"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-4">
                                            <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                Email address
                                            </label>
                                            <input
                                                type="text"
                                                name="email-address"
                                                id="email-address"
                                                autoComplete="email"
                                                className="input"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                            Mensaje
                                        </label>
                                        <textarea cols="200" rows="60" />
                                    </div>
                                </div>
                                <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact