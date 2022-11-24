import React from "react";
import './productCard.css'
const ProductCard = ({ prod }) => {
  console.log(prod);
  const {
    product_name,
    image,
    product_price,
    Market_Price,
    mobile,
    purchase_year,
    condition_type,
    brand_name,
    productDetails,
    location,
    time,
    userEmail,
  } = prod;



  return (
    <div className="containerdiv flex flex-col justify-start w-11/12 mx-auto md:justify-evently md:flex-row gap-10 ">
      <div className="left_side lg:w-[30%] md:w-[30%] m-5 md:m-0 lg:m-0">
        <div className="img_div my-5">
          {" "}
          <img className="w-full rounded-md shadow-md" src={image} alt="" />{" "}
        </div>
        <h2 className="text-3xl text-orange-300 font-bold"> $ {product_price}</h2>
      </div>
      <div className="right_side lg:w-[-60%] md:w-[60%]">
        <h2 className="text-4xl mb-3 text-lime-800 font-bold"> {product_name} </h2>
        <p className="description"> {productDetails.slice(0,400)} </p>
        <div> 
          <span> Market price : {Market_Price} </span>
          <span> purchase year : {purchase_year} </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
