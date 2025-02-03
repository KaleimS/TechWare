import React, { useEffect } from "react";
import CatagoriesPic from "../../../public/desk-supplies-composition-high-angle.jpg";

export default function Catagories() {
    
    useEffect(() => {
        if (window.paddle) {
            Paddle.Setup({ vendor: a87b709ece781724921c8150bc1ab062d35d714faebe9fc9eb })
        }
    }, []);

    let itemsList = [
        {
            priceId: "pri_01gsz8ntc6z7npqqp6j4ys0w1w",
            quantity: 5,
        },
        {
            priceId: "pri_01h1vjfevh5etwq3rb416a23h2",
            quantity: 1,
        },
    ];

    let customerInfo = {
        email: "sam@example.com",
        address: {
            countryCode: "US",
            postalCode: "10021",
        },
    };

    const openCheckout = (items, customer) => {
        if (window.Paddle) {
            Paddle.Checkout.open({
                items: items,
                customer: customer,
            });
        } else {
            console.error("Paddle is not loaded.");
        }
    };

    return (
        <div className="w-full h-[100vh] relative">
            <img
                src={CatagoriesPic}
                alt="d"
                className="w-full h-full object-cover object-top"
            />
            <div>
                <h3>
                    <code>Paddle.checkout.open()</code>
                </h3>
                <a
                    href="#"
                    className="bg-secondary hover:bg-white hover:text-black text-white font-bold py-5 px-12 absolute top-20 left-20 rounded-full cursor-pointer"
                    onClick={() => openCheckout(itemsList, customerInfo)}
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
