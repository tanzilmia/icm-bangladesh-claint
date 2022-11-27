import React from "react";

const CampainCard = ({ campcard }) => {
  const {
    image,
    product_name,
    product_price,
    sellerName,
    time,
    Market_Price
  } = campcard;
  return (
    <div className="card sm:w-96 md:w-full lg:w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-[150px] w-[150px] border[3px red-300] rounded-[50%]" src= {image} alt="Shoes" />
      </figure>
      <div className="card-body">
       <div className="">
       <h2 className="text-parple text-xl font-bold"> {product_name} </h2>
       <div className="flex justify-between">
       <h2 className="font-bold text-green-400"> $ {product_price} </h2>
       <h2 className="font-bold text-red-500"> <del> $ {Market_Price}</del> </h2>
         </div>
      
       </div>

        
        <div className="card-actions justify-evenly">
          <h5 className="text-xl font-semibold">Post by {sellerName} </h5>
          <h5 className=""> {time} </h5>
        </div>
      </div>
    </div>
  );
};

export default CampainCard;
