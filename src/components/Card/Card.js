import React from 'react'
import AOS from 'aos'

const Card = () => {
    return (

        <div class="block p-6 mx-auto mt-10 md:mt-20 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]
        "
            data-aos="flip-left"
            data-aos-duration="800">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nos encontramos en</h5>
            <p class="rage-fonttext-4xl text-gray-700 dark:text-gray-400">Sincelejo-Tumbatoro, Sincelejo, Sucre.</p>
        </div>

    )
}

export default Card