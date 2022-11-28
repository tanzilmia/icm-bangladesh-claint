import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOut from "./CheckOut";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
console.log(stripePromise);
const ParchesProduct = () => {
  const bookedprodut = useLoaderData();
  const {product_price,product_name} = bookedprodut
  console.log(bookedprodut);
  return (
    <div className="w-full md:w-[450px] lg:w-[450px] mx-auto">
      <h1 className="text-2xl my-3"> {product_name} </h1>
      <div>
        <h2 className="text-xl text-success  my-2">
          Price <strong>{product_price}</strong>{" "}
        </h2>
      </div>
      <div className="">
        <Elements stripe={stripePromise}> <CheckOut bookedprodut={bookedprodut}></CheckOut> </Elements>
      </div>
    </div>
  );
};

export default ParchesProduct;
