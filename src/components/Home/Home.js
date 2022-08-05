import "../Home/Home.css"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="mt-20 flex-col align-center w-full text-center">

            <section className="home-banner">
                <div className="home-banner-heading">
                    <p className="home-banner-heading-title rage-font">Villa Bárbara</p>
                    <p className="home-banner-heading-tag font-bold very-font ">Santuario de paz y de la vida silvestre</p>
                </div>
            </section>

            <section className="home-info">
                <Link to="/turismo-naturaleza">
                    <div className="home-info-card flex-col">
                        <img src="../media/images/home-info-img/Shape_5.png" alt="placeholder img"/>
                        <p className="home-info-title">Turismo de naturaleza</p>
                        <p className="home-info-desc">Contamos con una gran variedad de actividades para realizar en medio de la reserva forestal.</p>
                    </div>
                </Link>
                <Link to="/turismo-bienestar">
                    <div className="home-info-card flex-col">
                        <img src="../media/images/home-info-img/Shape_5-1.png" alt="placeholder img"/>
                        <p className="home-info-title">Turismo de bienestar</p>
                        <p className="home-info-desc">Ofrecemos terapia con la naturaleza, cómo el entorno natural ayuda a reconectar con tu salud física y espiritual.</p>
                    </div>
                </Link>
                <Link to="/reservoir">
                    <div className="home-info-card flex-col">
                        <img src="../media/images/home-info-img/Shape_5-2.png" alt="placeholder img"/>
                        <p className="home-info-title">Reserva forestal</p>
                        <p className="home-info-desc">Recorramos juntos este encantador lugar, donde hay muchos misterios para descubrir.</p>
                    </div>
                </Link>
                <Link to="/agroecologia">
                    <div className="home-info-card flex-col">
                        <img src="../media/images/home-info-img/Shape_5-3.png" alt="placeholder img"/>
                        <p className="home-info-title">Agroecología</p>
                        <p className="home-info-desc">Somos una finca que promueve el turismo de naturaleza ofreciendo un espacio de reconexión con el bosque seco tropical.</p>
                    </div>
                </Link>
                <Link to="/galery">
                    <div className="home-info-card flex-col">
                        <img src="../media/images/home-info-img/Shape_5-4.png" alt="placeholder img"/>
                        <p className="home-info-title">Galería</p>
                        <p className="home-info-desc">Programamos talleres agroecológicos donde aprenderás a hacer fertilizantes orgánicos.</p>
                    </div>
                </Link>
            </section>
        </div>
    )
}

export default Home