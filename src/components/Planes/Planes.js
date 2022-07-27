import "../Planes/Planes.css"

const Planes = () => {
    return (
        <div className="mt-28 mb-10 flex-col justify-center align-center w-full text-center">
            <p className="title">Planes permanentes</p>
            <div className="text-left w-2/3 m-auto">
                <div className="plan-container">
                    <div className="plan-sub-container">
                        <p className="subtitle mt-8">Pajareando</p>
                        <p className="paragraph mt-3">Haremos un recorrido matinal para escuchar y observar los diferentes tipos de aves del bosque seco tropical.</p>
                    </div>
                    <img className="plan-img"src="media/images/pajareando.jpg" alt="img-planes"/>
                </div>
                <div className="plan-container">
                    <div className="plan-sub-container">
                        <p className="subtitle mt-8">Noche bajo las estrellas</p>
                        <p className="paragraph mt-3">Podrásacampar y escuchar el sonido del bosque bajo un manto de estrellas al calor del fuego transformador.(Incluye carpa impermeable con colchonetas lámpara,cena, desayuno).</p>
                    </div>
                    <img className="plan-img"src="media/images/estrellas.jpg" alt="img-planes"/>
                </div>
                <div className="plan-container">
                    <div className="plan-sub-container">
                        <p className="subtitle mt-8">Recorrido y pasadía</p>
                        <p className="paragraph mt-3">Incluye recorrido por el sendero,conocerás acerca del Bst, de los distintos tipos de especies de la flora y fauna.</p>
                        <p className="paragraph">Recorrido por la zona agroforestal donde aprenderás de las buenas prácticas agrícolas y la autosostenibilidad en el Bst.</p>
                        <p className="paragraph">Vista a Montes de Maria desde el mirador “Mono aullador”podrás observar las alturas de la región y el golfo de Morrosquillo.</p>
                    </div>
                    <img className="plan-img"src="media/images/senderismo.jpg" alt="img-planes"/> 
                </div>
            </div>
        </div>
    )
}

export default Planes