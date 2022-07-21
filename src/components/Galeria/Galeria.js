import "../Galeria/Galeria.css"
import Carousel from './Carousel/Carousel'
import fauna from '../../../src/components/Galeria/Images/fauna.json'
/* import flora from '../../../src/components/Galeria/Images/flora.json' */

const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
}
const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
}

const carrusel = (data) => {
    return (
        <Carousel data={data} time={2000} width="850px" height="500px" captionStyle={captionStyle}
            radius="10px" slideNumber={true} slideNumberStyle={slideNumberStyle} captionPosition="bottom"
            automatic={true} dots={true} pauseIconColor="white" pauseIconSize="40px" slideBackgroundColor="darkgrey"
            slideImageFit="cover" thumbnails={true} thumbnailWidth="100px"
            style={{
                textAlign: "center",
                maxWidth: "850px",
                maxHeight: "500px",
                margin: "40px auto",
            }}
        />
    )
}
const Galeria = () => {

    return (
        <div className="mt-36 mb-32">
            <div style={{ textAlign: "center" }}>
                <h2 className="
                    text-8xl 
                    md:text-16xl 
                    lg:text-24xl 
                    font-face-rage"
                >
                    La Vida Animal en Villa Barbara</h2>

                <p className="
                    m-5 text-4xl 
                    md:text-4xl 
                    lg:text-4xl 
                    font-face-very"
                >
                    Conoce la gran variedad de ellas que habitan en nuestra reserva...
                </p>
                <div style={{ padding: "0 20px" }}>
                    {carrusel(fauna)}
                </div>
            </div>
        </div>
    )
}

export default Galeria