import React from 'react';


function Btn(props){

    return (
        <div>
            <button disabled="disabled" type='button'> {props.innerText} </button>
        </div>
    )
};


export default Btn;