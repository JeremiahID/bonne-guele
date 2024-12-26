import React from 'react';

function Footer(){
    return (
        <div className='footer flex flex-column '>
            <h1 className='text-uppercase fs-4  w-50 text-center'>"BonneGueule, clothes that carry you"</h1>
            <ul className='flex justify-content-evenly py-4 footer-links'>
                <li><a className='fs-6 text-capitalize' href="http://" target="_blank" >Agenda</a></li>
                <li><a className='fs-6 text-capitalize' href="http://" target="_blank" >Concept</a></li>
                <li><a className='fs-6 text-capitalize' href="http://" target="_blank" >Lookbook</a></li>
                <li><a className='fs-6 text-capitalize' href="http://" target="_blank" >Shops</a></li>
            </ul>
            <hr className='ft-line bg-dark'/>
            <p className='fs-8'>
              Cookie / GDPR Legal This site is protected by reCAPTCHA and Google's Privacy Policy and Terms of Service.
            </p>
        </div>
    )
};

export default Footer;