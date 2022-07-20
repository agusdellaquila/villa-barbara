import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaEnvira } from 'react-icons/fa'
import '../Contacto/Contacto.css'

const Contact = () => {
    const iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.289293137066!2d-75.51744476414237!3d6.287071155895357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44260a6b47b1d5%3A0xd6e4a0fd2cf5e039!2sVda.%20Piedras%20Blancas%2C%20Santa%20Elena%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses-419!2sar!4v1658010702675!5m2!1ses-419!2sar" width="640" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'

    return (
        <div className="grid grid-cols-3 w-full">
            <div className="text-center col-span-3 mt-20 mb-18 img-bg">
                <div className="px-4 sm:px-0 mt-12">
                    <h3 className="
                        my-28 
                        text-9xl
                        leading-6 
                        text-black 
                        font-face-rage 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Nuestra Ubicación</h3>
                    <h4 className="
                        mb-1
                        text-5xl
                        text-white 
                        font-face-very 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">Te esperamos para que disfrutes de paz y vida silvestre.</h4>
                </div>
            </div>
            <div className="flex justify-center bg-white mt-20">
                <div className="border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="w-auto" dangerouslySetInnerHTML={{ __html: iframeSource }}></div>
                </div>
            </div>
            <div className="bg-white mt-20">
                <div className="
                    block 
                    p-6 
                    h-full 
                    border 
                    border-gray-200 
                    shadow-md 
                    hover:bg-gray-100 
                    dark:bg-gray-800 
                    dark:border-gray-700 
                    dark:hover:bg-gray-700">
                    <h5 className="text-center mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white font-face-very">Nos puedes encontrar por...</h5>
                    <div className="mx-12 my-12 mb-5">
                        <ul className="text-black">
                            <li>
                                <FaEnvira className="inline mr-2 text-green-600 text-4xl" />
                                <NavLink to="/" className="hover:text-green-700 text-4xl my-7 font-face-rage">Planes</NavLink>
                            </li>
                            <li>
                                <FaEnvira className="inline mr-2 text-green-600 text-4xl" />
                                <NavLink to="/" className="hover:text-green-700 text-4xl my-7 font-face-rage">Turismo de Naturaleza</NavLink>
                            </li>
                            <li>
                                <FaEnvira className="inline mr-2 text-green-600 text-4xl" />
                                <NavLink to="/" className="hover:text-green-700 text-4xl my-7 font-face-rage">Turismo de Bienestar</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-white mt-20">
                <div className="border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="h-full" dangerouslySetInnerHTML={{ __html: iframeSource }}></div>
                </div>
            </div>
        </div>
    )
}

export default Contact