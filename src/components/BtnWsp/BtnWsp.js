import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './BtnWsp.css'

const BtnWsp = () => {
    return (
        <a href="https://api.whatsapp.com/send?phone=573147134225" className="btn-wsp fixed w-20 h-20 bg-green-500 hover:bg-white" target="_blank">
            <FaWhatsapp className="mx-auto my-4" />
        </a>
    )
}

export default BtnWsp