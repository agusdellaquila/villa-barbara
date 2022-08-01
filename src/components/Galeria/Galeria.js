import { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css"
import Carousel from './Carousel/Carousel'
import fauna from '../../../src/components/Galeria/Images/fauna.json'

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
            automatic={true} pauseIconColor="white" pauseIconSize="40px" slideBackgroundColor="darkgrey"
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
    
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="mb-18 md:mb-32">
            <div className="pt-9" style={{ textAlign: "center" }}>
                <h2 className="
                    mt-20
                    text-5xl 
                    md:text-8xl
                    rage-font"
                    data-aos="flip-left"
                    data-aos-duration="800"
                >La Vida Animal en Villa Barbara</h2>

                <p className="
                    m-5 
                    text-2xl 
                    md:text-4xl 
                    very-font"
                    data-aos="zoom-in-down"
                    data-aos-duration="1000"
                >Conoce la gran variedad de ellas que habitan en nuestra reserva...</p>

                <div data-aos="zoom-in-left" data-aos-duration="1000" style={{ padding: "0 20px" }}>
                    {carrusel(fauna)}
                </div>
            </div>
        </div>
    )
}

export default Galeria