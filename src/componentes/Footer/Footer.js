import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
            <footer className='footer'>
                <div>
                    <h1>Informações de Rodapé</h1>
                    <p className='texto'>Rua do restaurante</p>
                    <p className='texto'>Bairro</p>
                    <p className='texto'>Cidade-Estado</p>
                    <p className='icones'>
                        <FontAwesomeIcon icon={faFacebook} />
                        <FontAwesomeIcon icon={faInstagram} /> 
                    </p>
                </div> 
            </footer>
    )
}
export default Footer;