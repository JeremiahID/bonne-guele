import React from 'react';
import Header from '../header';
import Footer from '../footer';
import SectionTwo from '../section-two';


function Agenda(){
    return (
        <div>
            <Header />

            <div className=' agenda-section-one-wrapper flex'>
                <div className='agenda-section-one  m-0 flex flex-column justify-content-around'>
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
            
            <SectionTwo />
            <Footer />

        </div>
    )
};



export default Agenda;      