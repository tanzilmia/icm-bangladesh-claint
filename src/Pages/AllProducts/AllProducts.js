import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard'
const AllProducts = () => {
  
    const data = useLoaderData()
    const  {category_name} = data

     const {data:product = [], isLoading} = useQuery({
        queryKey : ['allproducts',],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/allproducts?category_name=${category_name}`)
            const data = await res.json()
            return data 
        }
     })

     console.log(product);
 
     if(isLoading){
        return <p>lodding...</p>
     }

    return (
        <div>
            <p>this is all product page {category_name}</p>
            {
                product.map(prod => <ProductCard key = {prod._id} prod = {prod}></ProductCard>)
            }
            
        </div>
    );
};

export default AllProducts;