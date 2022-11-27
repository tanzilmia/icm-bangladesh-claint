import React from "react";

const CampainCard = ({ campcard }) => {
  const {
    image,
    product_name,
    product_price,
    purchase_year,
    sellerName,
    time,
    userEmail,
    _id,
  } = campcard;
  return (
    <div className="card sm:w-96 md:w-full lg:w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-[200px]" src= {image} alt="Shoes" />
      </figure>
      <div className="card-body">
       <div className="">
       <h2 className="text-success text-3xl"> {product_name} </h2>
        <h2 className="card-title"> $ {product_price} </h2>
       </div>

        
        <div className="card-actions justify-evenly">
          <h5 className="text-xl">Post by {sellerName} </h5>
          <h5 className=""> {time} </h5>
        </div>
      </div>
    </div>
  );
};

export default CampainCard;
