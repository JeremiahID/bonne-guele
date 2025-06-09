import React from 'react';
import Header from '../../Components/header';
import Footer from '../../Components/footer';
import SectionTwo from '../section-two';

function Agenda(){
    return (
        <div>
            {/* calling the header component */}
            <Header />

            {/* Agenda section one */}
            <div className=' agenda-section-one-wrapper flex'>
                <div className='agenda-section-one m-0 flex flex-column justify-content-around '>
                    <p className=' flex'> 
                        <a href="http://" target="_blank" rel="noopener noreferrer" className='text-decoration-none text-black'>
                            Reception / 
                        </a>
                        <p className='font-fc p-0 m-0'>
                             Our collection for Tommorrow
                        </p> 
                    </p>

                    <h1 className='text-uppercase font-fc fs-1 text-blue-dark'>Our collections of tomorrow </h1>
                </div>
            </div>

            {/* Agenda section two */}
            <div className=' agenda-section-two-wrapper flex '>

                <div className='agenda-section-two-container flex justify-content-between'>
                    <div className='agenda-section-two-left agenda-background-default'>
                       {/* background image from csss */}
                    </div>

                    <div className='agenda-section-two-right agenda-background-default'>
                    {/* background image from csss */}
                    </div>
                </div>

            </div>

            {/* Agenda section two */}
            <div className=' agenda-section-three-wrapper flex'>

                <div className='agenda-section-three-container agenda-background-default flex'>
                        {/* background image from csss */}

                </div>

            </div>
            
            {/* calling thesection two component */}
            <SectionTwo />

            {/* calling the footer component */}
            <Footer />

        </div>
    );
};


export default Agenda;      