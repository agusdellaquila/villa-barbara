import { NavLink } from 'react-router-dom'
import {
    FaEnvira,
    FaFacebookF,
    FaInstagram,
    FaWhatsapp
} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="contenedor">
                <div className="mx-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Villa Barbara</h4>
                            <p className="text-gray-500">
                                Av. Benavidez y Bonduel <br />
                                Complejo Las Lajas 1 - Lote 101 <br />
                                Colombia <br /><br />
                                <strong>Telef: </strong>264-5501 706<br />
                                <strong>Email: </strong>email@email.com<br />
                            </p>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Enlaces</h4>
                            <ul className="text-gray-500">
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/" className="hover:text-green-700">Inicio</NavLink>
                                </li>
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/reservoir" className="hover:text-green-700">Reserva Forestal</NavLink>
                                </li>
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/services" className="hover:text-green-700">Servicios</NavLink>
                                </li>
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/galery" className="hover:text-green-700">Galeria</NavLink>
                                </li>
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/history" className="hover:text-green-700">Historia</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Nuestros Servicios</h4>
                            <ul className="text-gray-500">
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/" className="hover:text-green-700">Planes</NavLink>
                                </li>
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/" className="hover:text-green-700">Turismo de Naturaleza</NavLink>
                                </li>
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/" className="hover:text-green-700">Turismo de Bienestar</NavLink>
                                </li>
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/" className="hover:text-green-700">Arte Naturaleza</NavLink>
                                </li>
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/" className="hover:text-green-700">Agroecología</NavLink>
                                </li>
                                <li>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/" className="hover:text-green-700">Gastronomía</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className="pb-4">Suscríbete para recibir nuestras ofertas</h4>
                            <p className="text-gray-500 pb-2">Cientos de personas ya están disfrutando de nuestra propuesta</p>
                            <form className="flex flex-row flex-wrap">
                                <input type="text" placeholder='email@email.com' />
                                <button className="">Suscríbete</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-900 text-gray-500 px-10">
                <div className="max-w-7xl sm:flex-row py-4 mx-auto">
                    <div className="flex justify-between text-center">
                        <div>
                            <div>
                                Copyright <strong>company<span></span></strong>. All Rights Reserved
                            </div>
                            <div>
                                Desarrollado por <a href="https://www.coderhouse.com/" className="text-green-600">CoderHouse</a>
                            </div>
                        </div>
                        <div className="text-center text-xl text-green-600 mb-2">
                            <NavLink to="/" >
                                <FaFacebookF className="w-10 h-10 rounded-full bg-white hover:bg-green-300 mx-1 inline-block p-1" />
                            </NavLink>
                            <NavLink to="/" >
                                <FaInstagram className="w-10 h-10 rounded-full bg-white hover:bg-green-300 mx-1 inline-block p-1" />
                            </NavLink>
                            <NavLink to="/" >
                                <FaWhatsapp className="w-10 h-10 rounded-full bg-white hover:bg-green-300 mx-1 inline-block p-1" />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer