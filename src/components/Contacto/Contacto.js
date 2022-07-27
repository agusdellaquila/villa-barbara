import React, { useEffect } from 'react'
import AOS from 'aos'
/* import { NavLink } from 'react-router-dom' */
import Card from '../Card/Card'
import '../Contacto/Contacto.css'

const Contact = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
            <div className="text-center col-span-1 lg:grid-cols-span-2 mt-20 md:mt-8 mb-18 md:mb-32 lg:mb-8 img-bg">
                <div className="px-4 sm:px-0 mt-10 lg:mt-7">
                    <h3 className="
                        md:mt-28
                        md:my-18
                        text-6xl 
                        md:text-9xl
                        lg:text-8xl
                        text-black 
                        font-face-rage 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                        data-aos="flip-left"
                        data-aos-duration="800"
                    >Nuestra Ubicación</h3>

                    <h4 className="
                        text-3xl
                        md:text-5xl
                        text-white 
                        font-face-very 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.95)]"
                        data-aos="zoom-in-down"
                        data-aos-duration="1000"
                    >Te esperamos para que disfrutes de paz y vida silvestre.</h4>
                    <Card />
                </div>
            </div>
            <div className="flex justify-center bg-white mt-12">
                <div className="w-full md:mt-8">
                    <iframe title="mapa villa barbara" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.8203537132827!2d-75.3750155!3d9.3491599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e59173638bd2337%3A0xab1d4dd13b932a!2sFinca%20Villa%20Barbara!5e0!3m2!1ses!2sar!4v1658533207998!5m2!1ses!2sar" width="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Contact