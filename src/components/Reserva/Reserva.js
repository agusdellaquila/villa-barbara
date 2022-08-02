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
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/49707521c1fe984d03b5b10c0aead381f02ba001f4c962777c81a8a2d74d46000e151b87.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full col-span-1 sm:col-span-2 row-span-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/79795651b0afd5d040367b3ea236b20773ebb7b5ed2a76aaaa2804c779f8b1b2e3caa452.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/585256839b27654a5bdf3c07b5e63d315c32c15a1501f1b3e6b1a609f512626be0b645f2.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full sm:col-span-2 md:col-span-1 sm:row-span-2 md:row-span-1 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/105544520f2d5e1813a7d7521cce4453816824e29171b58366d46729d63ca75cd0b2408c.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/74755577c94f52361355bcb7d3713d7c988d3442fb4a432652af3dba8bbff5837529cfd7.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/8980452096eddfce6ac61388c3946443cc97e9f9cb437ed6a3f985e1c5e672b9e6dc40bf.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src="https://serving.photos.photobox.com/06150790a8905c9fc0332671fd2521bddc835b0c2fd797f2ee647be3105e247f405da6af.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src="https://serving.photos.photobox.com/573765592aada6ba15ca286f5476a798fb66bf854e4e07ec09c40334debdbbb512188c3c.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src="https://serving.photos.photobox.com/5643286004fd5c303e74c3d084c02277ac16cfd8700f079f55bff2f26954cbf1b8d87def.jpg" alt={fauna[0].caption} />
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
                        rage-font
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
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/43333219686d71f4be4c5b052dd13a40ff2c27af03c8d67eb0894f3f669d34ec756f15d6.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full col-span-1 sm:col-span-2 row-span-2 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/437679241bf182b2c70a3de0df02b2c4487da9438dbaf9c6abc7633abf265d2e60a63f88.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/58819694300d618a7851406e02de339cea3d47f3471bbdb67e4d5322f5b7f9c564353dcc.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full sm:col-span-2 md:col-span-1 sm:row-span-2 md:row-span-1 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/4007082061fcb7e175e0b4573f613e43342b8b3651dd3d1a7f7b50c55de31c4c311547cd.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/71612397c5209310dc1d70b68833f8cd3c95118275cdbd6d8ebb278b3a7237432b5a6f84.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="img-responsive rounded-lg" src="https://serving.photos.photobox.com/77476783768cbffeb0df602657c1f9a54f50a38f38eafb30a411d1c215b9b519daf679db.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src="https://serving.photos.photobox.com/2816821194455c85c7ca725beb5449ca941c7eaa7f24c21587d11f1cc0ef40b963e93256.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-right" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src="https://serving.photos.photobox.com/842591491866e9890cc98e39dcbba64904138b66c52815a0945cec4044f18237b5975eb9.jpg" alt={fauna[0].caption} />
                            </div>
                            <div data-aos="zoom-in-left" className="w-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                                <img className="rounded-lg" src="https://serving.photos.photobox.com/5318603856eeb8d04ba847edc1cbbc59d3189eb2207522ad06075653f1c4c54027fb89e2.jpg" alt={fauna[0].caption} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reserva