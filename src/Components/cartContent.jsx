import deleteIcon from "../Images/delete.svg";
import minus from "../Images/minus.svg";
import add from "../Images/add.svg"



export default function CartContent(){
    return (
        <div className="cart-body-wrapper">
            <div className="cart-body py-2 flex flex-column justify-content-start">
            {/* cart content structure */}
                <div className="cart-content my-1 flex">
                    <div className="cart-content-section-left">
                    
                    </div>
                    <div className="cart-content-section-middle flex flex-column justify-content-between  align-items-start ">
                        <p className="">
                            Lui Vuitton
                        </p>
                        <p className="m-0">
                            $120
                        </p>
                    </div>
                    <div className="cart-content-section-right d-flex flex-column">
                        <div className="delete-icon flex justify-content-end align-items-start p-1">
                            <img src={deleteIcon} alt="delete button" className="svg " />
                        </div>
                        <div className="add-remove-price flex justify-content-around align-items-center">
                            <div>
                                <button className="svg-button">
                                    <img src={minus} alt="Minus-svg" className="svg" />
                                </button>
                            </div>
                            <p className=" fs-5 pt-3">0</p>
                            <div>
                                <button className="svg-button">
                                    <img src={add} alt="add-svg" className="svg" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}