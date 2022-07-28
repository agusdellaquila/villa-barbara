import "../NotFound/NotFound.css"

const NotFound = () => {
    return (
        <div className="flex-col justify-center align-center text-center">
            <p className="rage-font text-7xl mt-52 mb-10">Lo sentimos esa página esta fuera de nuestro bosque</p>
            <a href="/" className="mb-28"><p className="mb-10 very-font text-3xl"><span className="bg-green-700 p-2 rounded">Volver a a Villa Bárbara</span></p></a>
        </div>
    )
}

export default NotFound