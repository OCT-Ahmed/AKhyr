import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// This component recive 3 three inputs: price, plan id and type of payment

const PaymentButton = ({type, price, planId }: {type: string; price:string; planId:string }) => {
    // PayPal setup options
    const initialOptions = {
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: type === "once" ? "capture" : "subscription",
        valut: type === "monthly" ? true : false,
    }

    return (
        <PayPalScriptProvider options={initialOptions}>
            
            <PayPalButtons
                //  button styles customization
                style={{
                    layout: "vertical",
                    color: "blue", // or: gold, silver, white, black
                    shape: "rect", //or pill for rounded
                    label: type === "once" ? "pay" : "subscribe",
                }}
                // ----------------------------------------------------------- 
                // one time pay logic 
                //------------------------------------------------------------
                createOrder={type === "once" ? (data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: price, // we pass the value like 
                                    // "$5.00"
                                    
                                },
                            },
                        ],
                    });
                } : undefined }
                // ----------------------------------------------------------- 
                // monthly subscription logic 
                //------------------------------------------------------------

                // ----------------------------------------------------------- 
                // After payment approval logic 
                //------------------------------------------------------------
                onApprove={(data, actions) => {
                    if (type == "once") {
                        return actions?.order?.capture().then((details) => {
                            alert(`Thank you for your support, ${details.payer?.name?.given_name}!`);
                            // Below, you can redirect the user to a thank you page
                        }); 
                    } else {
                        alert("Thank you for subscribing! You are now a partner.")
                        // Here you can grant the user subscription privileges
                    }
                }}
            />
        </PayPalScriptProvider>
    );
};

export default PaymentButton;