import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaTelegramPlane, FaFacebook, FaInstagram, FaWhatsappSquare } from 'react-icons/fa'
import '../Contacto/Contacto.css'

const Contact = () => {
    return (
        <div className="grid grid-cols-3 w-full">
            <div className="text-center col-span-3 mt-20 mb-18 img-bg">
                <div className="px-4 sm:px-0 mt-12">
                    <h3 className="
                        mt:10
                        md:mt-28
                        md:my-18
                        text-6xl 
                        md:text-9xl 
                        text-black 
                        font-face-rage 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Nuestra Ubicación</h3>
                    <h4 className="
                        mb-4
                        text-3xl
                        md:text-5xl
                        text-white 
                        font-face-very 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Te esperamos para que disfrutes de paz y vida silvestre.</h4>
                </div>
            </div>
            <div className="flex justify-center bg-white mt-20">
                <div className="">
                    <div className="w-auto"><iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63452.01620498238!2d-75.51688485750022!3d6.296415474686272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44260a6b47b1d5%3A0xd6e4a0fd2cf5e039!2sVda.%20Piedras%20Blancas%2C%20Santa%20Elena%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sar!4v1658373463190!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'</div>
                </div>
            </div>
            <div className="bg-white mt-20">
                <div className="
                    align-middle
                    block 
                    p-6 
                    h-full 
                    bg-gray-700">
                    <h5 className="text-center mb-2 mt-20 text-4xl font-bold tracking-tight text-gray-200 dark:text-white font-face-very">Nos puedes encontrar en</h5>
                    <div className="mx-12 my-12">
                        <ul className="text-gray-200">
                            <li className="mb-5">
                                <FaFacebook className="align-middle inline mr-2 text-green-600 text-5xl" />
                                <NavLink to="/" className="align-middle hover:text-green-700 text-5xl my-7 font-face-rage">Facebook</NavLink>
                            </li>
                            <li className="mb-5">
                                <FaInstagram className="align-middle inline mr-2 text-green-600 text-5xl" />
                                <NavLink to="/" className="align-middle hover:text-green-700 text-5xl my-7 font-face-rage">Instagram</NavLink>
                            </li>
                            <li className="mb-5">
                                <FaTelegramPlane className="align-middle inline mr-2 text-green-600 text-5xl" />
                                <NavLink to="/" className="align-middle hover:text-green-700 text-5xl my-7 font-face-rage">Email</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-white mt-20 bg-gray-300">
                <div className="h-full p-6">
                    <h5 className="text-center mb-2 mt-20 text-4xl font-bold tracking-tight text-gray-700 dark:text-white font-face-very">Escribenos    por WhatsApp</h5>
                    <div className="text-center grow mt-8">
                        <p className="inline">Hola, mi nombre es <input type="text" id="inputNombre" placeholder="nombre"/> y me gustaría saber más sobre sus servicios y promociones</p>
                        <NavLink to="/" className="my-auto align-middle hover:text-green-700 text-5xl my-7 font-face-rage">
                            <FaWhatsappSquare className="align-middle inline mr-2 text-green-600 text-8xl" />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact