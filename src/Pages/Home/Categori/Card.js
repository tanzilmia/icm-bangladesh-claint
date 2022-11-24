import React from "react";
import { Link } from "react-router-dom";


const Card = ({categories}) => {
  
    const {thumbnal,brand_name,_id} = categories;

  return (
    <div className="card bg-base-100 shadow-xl mx-5 md:mx-0 lg:mx-0 image-full">
      <figure>
        <img src= {thumbnal} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-6xl mt-20 font-bold"> {brand_name} </h2>
        <p className="text-xl text-fuchsia-100"> Exple More {brand_name} Brand used car . our seller sells best qualiy of products </p>
        <div className="card-actions justify-end">
          <Link to = {`/categori/${_id}`}><button className="btn btn-primary"> View All </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
