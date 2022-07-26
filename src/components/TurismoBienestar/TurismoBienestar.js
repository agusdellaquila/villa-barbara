import "../TurismoBienestar/TurismoBienestar.css"

const TurismoBienestar = () => {
    return(
        <div className="mt-28 flex-col text-center justify-center mx-auto p-10 h-full">
                <p className="title">Turismo de bienestar</p>
                <div className="w-2/3 m-auto text-center">
                    <p className="paragraph">
                        Ofrecemos terapia con la naturaleza, cómo el entorno natural ayuda a reconectar con tu salud física y espiritual. Te inyectara energía positiva a tu alma.
                    </p>
                    <p className="rage-font text-7xl mt-8">Planes de salud y bienestar con la naturaleza</p>
                    <ul>
                        <li className="paragraph">Conectemos con el espíritu del bosque</li>
                        <li className="paragraph">Sana con la tierra</li> 
                        <li className="paragraph">Terapia con plantas del bosque seco tropical</li>
                        <li  className="paragraph">Sana con la luna y el fuego.</li>        
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img className="bienestar-img"src="media/images/bienestar.jpg" alt="img-bienestar" />
                </div>
        </div>
    )
}

export default TurismoBienestar