import React, { useEffect } from 'react'
import AOS from 'aos'
/* import { NavLink } from 'react-router-dom' */
import '../Contacto/Contacto.css'

const Contact = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="text-center col-span-1 lg:grid-cols-span-2 mt-20 mb-18 img-bg">
                <div className="px-4 sm:px-0 mt-28">
                    <h3 className="
                        md:mt-28
                        md:my-18
                        text-6xl 
                        md:text-9xl 
                        text-black 
                        font-face-rage 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                        data-aos="flip-left"
                        data-aos-duration="800"
                        >Nuestra Ubicación</h3>

                    <h4 className="
                        mb-4
                        text-3xl
                        md:text-5xl
                        text-white 
                        font-face-very 
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                        data-aos="zoom-in-down"
                        data-aos-duration="1000"
                        >Te esperamos para que disfrutes de paz y vida silvestre.</h4>

                </div>
            </div>
            <div className="flex justify-center bg-white mt-20">
                <div className="">
                    <div className="w-auto"><iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63452.01620498238!2d-75.51688485750022!3d6.296415474686272!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44260a6b47b1d5%3A0xd6e4a0fd2cf5e039!2sVda.%20Piedras%20Blancas%2C%20Santa%20Elena%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses!2sar!4v1658373463190!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'</div>
                </div>
            </div>
        </div>
    )
}

export default Contact