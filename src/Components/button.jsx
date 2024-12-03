import React from 'react';


function Btn(props){

    return (
        <div>
            <button  type='button' className='btn border-2 border-dark mt-2 rounded-5'> {props.innerText} </button>
        </div>
    )
};

export default Btn;