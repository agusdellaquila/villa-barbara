import React from 'react'
import '../Contacto/Contacto.css'

const Contact = () => {
    const URL ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.289293137066!2d-75.51744476414237!3d6.287071155895357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44260a6b47b1d5%3A0xd6e4a0fd2cf5e039!2sVda.%20Piedras%20Blancas%2C%20Santa%20Elena%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses-419!2sar!4v1658010702675!5m2!1ses-419!2sar' 
    const iframeSource = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.289293137066!2d-75.51744476414237!3d6.287071155895357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44260a6b47b1d5%3A0xd6e4a0fd2cf5e039!2sVda.%20Piedras%20Blancas%2C%20Santa%20Elena%2C%20Medell%C3%ADn%2C%20Antioquia%2C%20Colombia!5e0!3m2!1ses-419!2sar!4v1658010702675!5m2!1ses-419!2sar" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    return (
        <div className="my-40 flex justify-center mx-auto bgColor p-10 min-h-screen drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
            <div className="mt-4 sm:mt-0 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="mb-5">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-8xl text-center font-black leading-6 text-gray-900 font-face-rage">Ubicación</h3>
                            <h4 className="mt-10 text-3xl text-center text-gray-600 font-face-very">Use a permanent address where you can receive mail.</h4>
                        </div>
                    </div>
                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="container rounded-lg" dangerouslySetInnerHTML={{__html: iframeSource}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact