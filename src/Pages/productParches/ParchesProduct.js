
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ParchesProduct = () => {
    const bookedprodut = useLoaderData()
    console.log(bookedprodut);
    return (
        <div>
            <h1 className='text-4xl'> Details about {bookedprodut?.product_name} </h1>
            <div>
                <h2 className='text-xl text-success my-1'>Price <strong>{bookedprodut?.product_price}</strong> </h2>
            </div>

        </div>
    );
};

export default ParchesProduct;