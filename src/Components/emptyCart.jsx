import React from 'react'

export default function EmptyCart(){
    return(
        <div className="flex flex-column bg-dark-subtle">                              
            <p className="text-capitalize font-fc fs-6">Your cart is empty</p>
            <a href="" target="_blank" className="btn-a "> start shopping</a>
        </div>
    )
}

