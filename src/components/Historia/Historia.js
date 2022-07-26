import "../Historia/Historia.css"

const Historia = () => {
    return (
        <div className="mt-24 mb-12 flex-col align-center justify-center w-full text-center">
            <p className="title">Historia</p>
            <img className="history-img" src="../media/images/history/staff.jpg" alt="historia_img" />
            <div className="w-2/3 m-auto text-center">
                <p className="paragraph">
                    Finca villa Bárbara fue adquirida a principios del año 2000 , con el objetivo de refugiar a campesinos desplazados a causa del conflicto armado, se convirtió en un santuario de paz donde las personas podían alojarse temporalmente mientras encontraban un hogar.

                    Años después cuando el conflicto armado cesó en Montes de María  pasó a ser una finca ganadera y agrícola, pero a partir del año 2013 empezó un proceso de restauración y conservación del bosque seco tropical.
                </p>

                <p className="paragraph">
                    Creemos que es posible una relación armoniosa entre los seres humanos y la naturaleza y que la paz también es reconciliarse con la flora y fauna.
                </p>
                <p className="rage-font text-7xl">Misión</p>
                <p className="paragraph">Trabajamos por la paz, transformación social y desarrollo sustentable en un ambiente restaurado  reconciliado con la naturaleza. Buscamos que los visitantes y la comunidad en general hallen  una oportunidad de conectar    personalmente con el ecosistema, encontrar paz interior y aprender amar los animales y las plantas.</p>
                <p className="rage-font text-7xl">Visión</p> 
                <p className="paragraph">En un mediano y largo plazo ser multiplicador de esta iniciativa de restauración del bosque seco tropical. Lograr ser una organización auto sostenible que genere recursos económicos   para el fortalecimiento de la construcción de paz en Montes de María.</p>
            </div>
        </div>
    )
}

export default Historia