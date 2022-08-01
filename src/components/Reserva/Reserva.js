import { useEffect } from "react"
import AOS from 'aos'
import "aos/dist/aos.css"

import fauna from '../Galeria/Images/fauna.json'

const Reserva = () => {
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="mb-6 md:mb-12 flex justify-center mx-auto p-6 md:p-10 min-h-screen">
            <div className="mt-24 md:mt-32 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                <div className="md:grid md:grid-cols-1 md:gap-6">
                    <div className="mb-5">
                        <div className="px-1 md:px-4">
                            <p className="
                                text-6xl
                                sm:text-7xl
                                md:text-8xl
                                text-center
                                text-gray-900 
                                rage-font
                                drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                                data-aos="flip-left"
                                data-aos-duration="800"
                                >Reserva Forestal</p>

                            <p className="
                                mt-10
                                text-6xl
                                sm:text-5xl
                                lg:text-8xl
                                md:text-6xl 
                                text-center 
                                text-gray-600 
                                rage-font
                                drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                                data-aos="zoom-in-down"
                                data-aos-duration="800"
                                >Flora</p>

                        </div>
                        <div className="mx-auto mt-6 sm:px-0 w-3/4">
                            <p className="
                                text-1xl
                                sm:text-2xl
                                md:text-3xl
                                text-center 
                                font-black
                                text-gray-900 
                                very-font
                                leading-relaxed"
                                data-aos="zoom-in-left"
                                data-aos-duration="800"
                            >El bosque seco tropical es uno de los ecosistemas más amenazados en el planeta, en villa Bárbara somos conscientes de ello por eso preservamos la flora, reconocemos que es fundamental para supervivencia de otras especies.</p>

                            <p className="
                                mt-6
                                text-1xl
                                sm:text-2xl
                                md:text-3xl
                                text-center 
                                font-black 
                                text-gray-900 
                                very-font
                                leading-relaxed"
                                data-aos="zoom-in-right"
                                data-aos-duration="800"
                            >Este lugar  cuenta con una gran diversidad de especies de flor propios del bosque seco tropical que sirven como refugio, alimento y hogar para muchas especies de mamíferos, aves y hongos</p>

                        </div>
                    </div>
                </div>
                <div className="px-2 md:px-6 py-2 md:py-6 bg-gradient-to-r from-gray-300 to-lime-800 rounded-lg mx-auto mt-10 w-4/4 md:w-3/4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                    <div className="md:mt-0 md:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[0].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full col-span-1 sm:col-span-2 row-span-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[1].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[2].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full sm:col-span-2 md:col-span-1 sm:row-span-2 md:row-span-1 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[3].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[4].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[5].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src={fauna[6].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src={fauna[7].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src={fauna[8].image} alt={fauna[0].caption} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAUNA */}
                <div className="mt-24 px-4 sm:px-0 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                    <p className="
                        mt-10
                        text-6xl
                        sm:text-5xl
                        lg:text-8xl
                        md:text-6xl 
                        text-center 
                        text-gray-600 
                        font-face-rage
                        drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                        data-aos="zoom-in-down"
                        data-aos-duration="800"
                    >Fauna</p>

                </div>
                <div className="mx-auto mt-6 px-3 md:px-0 w-3/4">
                    <p className="
                            text-1xl
                            sm:text-2xl
                            md:text-2xl
                            lg:text-3xl
                            text-center 
                            font-black 
                            text-gray-900 
                            very-font
                            leading-relaxed"
                            data-aos="zoom-in-right"
                            data-aos-duration="800"
                    >
                        Villa Bárbara ha contribuido en la protección de la biodiversidad dado que la razón
                        de ser es la conservación de un parche de bosque seco tropical.
                    </p>
                    <p className="
                        mt-6
                        text-1xl
                        sm:text-2xl
                        md:text-3xl
                        text-center
                        font-black
                        text-gray-900 
                        very-font
                        leading-relaxed"
                        data-aos="zoom-in-left"
                        data-aos-duration="800"
                    >Este lugar sirve para la rehabilitación y la recuperación del hábitat para las distintas especies de mamíferos y aves  que están amenazadas en el bosque seco, por ejemplo, el Tigrillo, Yaguarundí, Taira, Zorros, Guacamayas verdes etc.</p>

                </div>
                {/* IMAGENES */}
                <div className="px-2 md:px-6 py-2 md:py-6 bg-gradient-to-r from-lime-200 to-yellow-700 rounded-lg mx-auto mt-10 w-4/4 md:w-3/4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                    <div className="md:mt-0 md:col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-4">
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[0].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full col-span-1 sm:col-span-2 row-span-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[1].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[2].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full sm:col-span-2 md:col-span-1 sm:row-span-2 md:row-span-1 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[3].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[4].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src={fauna[5].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src={fauna[6].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src={fauna[7].image} alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src={fauna[8].image} alt={fauna[0].caption} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reserva