import { NavLink } from 'react-router-dom'
import {
    FaEnvira,
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaEnvelope
} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='flex-grow'>
            <div className="w-full bg-gray-900 text-gray-500 px-10">
                <div className="max-w-7xl sm:flex-row py-4 mx-auto">
                    <div className="flex justify-center text-center">
                        <div className="text-center text-xl text-green-600 mb-2">
                            <a href="https://www.facebook.com/fincavillabarbara/" target="_blank" rel="noreferrer">
                                <FaFacebookF className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white hover:bg-green-300 mx-1 inline-block p-1" />
                            </a>
                            <a href="https://www.instagram.com/fincavillabarbara/" target="_blank" rel="noreferrer">
                                <FaInstagram className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white hover:bg-green-300 mx-1 inline-block p-1" />
                            </a>
                            <a href="https://youtube.com/channel/UCHDnCVrfmOzykoeuXdep8yA" target="_blank" rel="noreferrer">
                                <FaYoutube className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white hover:bg-green-300 mx-1 inline-block p-1" />
                            </a>
                            <a href="mailto:https://fincavillabarbara@gmail.com" target="_blank" rel="noreferrer">
                                <FaEnvelope className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-white hover:bg-green-300 mx-1 inline-block p-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-contenedor">
                <div className="mx-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Reserva Villa Barbara</h4>
                            <p className="text-gray-500">
                                Sincelejo - Tumbatoro <br />
                                Sucre - Colombia<br /><br />
                                <strong>Telef: </strong>+57 314 713 4225<br />
                                <strong>Email: </strong>fincavillabarbara@gmail.com<br />
                            </p>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Enlaces</h4>
                            <ul className="text-gray-500">
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira onClick={scrollToTop} className="inline mr-2 text-green-600" />
                                    <NavLink to="/" className="hover:text-green-700">Inicio</NavLink>
                                </li>
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/reservoir" className="hover:text-green-700">Reserva Forestal</NavLink>
                                </li>
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/history" className="hover:text-green-700">Historia</NavLink>
                                </li>
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/galery" className="hover:text-green-700">Galeria</NavLink>
                                </li>
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/contact" className="hover:text-green-700">Ubicacion</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Nuestros Servicios</h4>
                            <ul className="text-gray-500">
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/planes" className="hover:text-green-700">Planes</NavLink>
                                </li>
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/turismo-naturaleza" className="hover:text-green-700">Turismo de Naturaleza</NavLink>
                                </li>
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/turismo-bienestar" className="hover:text-green-700">Turismo de Bienestar</NavLink>
                                </li>
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/arte-naturaleza" className="hover:text-green-700">Arte con Naturaleza</NavLink>
                                </li>
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/agroecologia" className="hover:text-green-700">Agroecología</NavLink>
                                </li>
                                <li className='footer-li' onClick={scrollToTop}>
                                    <FaEnvira className="inline mr-2 text-green-600" />
                                    <NavLink to="/gastronomia" className="hover:text-green-700">Gastronomía</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-900 text-gray-500 px-10">
                <div className="max-w-7xl sm:flex-row py-4 mx-auto">
                    <div className="flex justify-center text-center">
                        <div>
                            <div>
                                Copyright <a className="text-green-600" href='https://www.sembrandopaz.org' target='_blank' rel="noreferrer"><strong>www.sembrandopaz.org</strong></a>. Todos Los Derechos Reservados
                            </div>
                            <div className='mt-1'>
                                Desarrollado por:
                            </div>
                            <div>
                                <a href="http://www.linkedin.com/in/lauraquintar" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-green-500"> Laura Quintar - UI</a><i className='text-2xl'> | </i>
                                <a href="https://agusdellaquila.github.io/acu-web-portfolio/" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-green-500">Agustin Dell'AquiLa - Front</a><i className='text-2xl'> | </i>
                                <a href="https://linkedin.com/in/miguel-castro-kenny" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-green-500">Miguel Castro Kenny - Front</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer