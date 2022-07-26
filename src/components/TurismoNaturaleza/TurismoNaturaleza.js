import "../TurismoNaturaleza/TurismoNaturaleza.css"

const TurismoNaturaleza = () => {
    return(
        <div className="mt-28 flex-col text-center justify-center mx-auto p-10">
            <p className="title">Turismo de naturaleza</p>
            <p className="paragraph w-2/3 m-auto text-justify">
                Contamos con una reserva forestal de bosque seco tropical, donde podrás hacer un emocionante recorrido en medio del bosque(senderismo).
                Tenemos espacios habilitados para que puedas acampar, donde te conectaras con la naturaleza, tendrás la oportunidad de escuchar el sonido de losanimalesnocturnos, estar frente a una hermosa fogata y observarmillones de estrellas alejadode la luz artificial de las ciudades.
                Tenemos una gran variedad de especies incluyendo aves propias del BST, el espacio propicio para el avistamiento, una gran oportunidad paralos amantes de las aves.
            </p>
            <div className="flex justify-center">
                <img className="arte-img"src="media/images/naturaleza.jpg" alt="img-arte"/>
            </div>
        </div>
    )
}

export default TurismoNaturaleza