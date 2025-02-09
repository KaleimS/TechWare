import React from "react";
import CatagoriesPic from "../../../public/desk-supplies-composition-high-angle.jpg";

export default function Catagories() {
    
    

    return (
        <div className="w-full h-[100vh] relative">
            <img
                src={CatagoriesPic}
                alt="d"
                className="w-full h-full object-cover object-top"
            />
            <div>
                <a
                    href="#"
                    className="bg-secondary hover:bg-white hover:text-black text-white font-bold py-5 px-12 absolute top-20 left-20 rounded-full cursor-pointer"
                >
                    Sign up now!
                </a>
            </div>

            <div className="absolute top-44 left-20 text-white text-3xl font-bold">
                Upgrade Your Workspace Today !
            </div>
            <div className="absolute top-60 left-20 text-white text-xl">
                Techware brings you an endless selection <br></br> of Office
                Supplies
            </div>
        </div>
    );
}

