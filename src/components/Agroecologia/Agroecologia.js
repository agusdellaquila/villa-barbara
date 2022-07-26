import "../Agroecologia/Agroecologia.css"

const Agroecologia = () => {
    return(
        <div className="mt-28 flex-col text-center justify-center mx-auto p-10 h-full">
            <p className="title">Agroecología</p>
            <div className="w-2/3 m-auto text-center">
                <p className="paragraph">
                    Programamos talleres agroecológicos donde aprenderás a hacer fertilizantes orgánicos.
                    Aprenderás practicas ingeniosas en el cultivo de plantas y procesos amables con el medio ambiente.
                </p>
                <p className="subtitle">Planes</p>
                <p className="paragraph">Taller de microrganismos eficientes </p>
                <p className="paragraph">Fertiliza con abonos orgánicos </p>
                <p className="paragraph">Modelo endógeno</p>
            </div>
            <div className="flex justify-evenly mt-10">
                <img className="ae-img"src="media/images/IMG_8351.jpg" alt="img-agroecologia"/>
                <img className="ae-img" src="media/images/IMG_6877.jpg" alt="img-agroecologia"/>
            </div>
        </div>
    )
}

export default Agroecologia