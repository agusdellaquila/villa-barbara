import "../ArteNaturaleza/ArteNaturaleza.css"

const ArteNaturaleza = () => {
    return(
        <div className="mt-28 flex-col text-center justify-center mx-auto p-10 h-full">
            <p className="title">Arte en naturaleza</p>
            <div className="w-2/3 m-auto text-center">
                <p className="paragraph">Realizamos un recorrido por el bosque acompañado por un biolog@ enseñándote acerca de la importancia del bosque seco tropical, donde al final del recorrido podrás dibujar  y pintar lo que aprendiste, lo que más te gusto yllevarlo casa, como un recuerdo de una experiencia inolvidable</p>
                <p className="subtitle mt-5">Plan pedagógico a través del arte</p>
                <p className="paragraph mt-3">Disfrutarte </p>
            </div>
            <div className="flex justify-center">
                <img className="arte-img" src="media/images/arte.jpg" alt="img-arte"/>
            </div>
        </div>
    )
}

export default ArteNaturaleza