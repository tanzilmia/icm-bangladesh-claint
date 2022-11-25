import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookModal from '../../component/BookModal';
import { myContext } from '../../contextApi/Authcontext';
import ProductCard from './ProductCard'
const AllProducts = () => {
    const {user} = useContext(myContext)
    const [modalinfo, setmodalinfo] = useState(null)
    const data = useLoaderData()
    const  {category_name} = data

     const {data:product = [], isLoading} = useQuery({
        queryKey : ['allproducts',category_name],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/allproducts?category_name=${category_name}&email=${user?.email}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('icmToken')}`
                }
            })
            const data = await res.json()
            return data 
        }
     })
     if(isLoading){
        return <p>lodding...</p>
     }

    return (
        <div>
            <p>this is all product page {category_name}</p>
            {
                product.map(prod => <ProductCard setmodalinfo={setmodalinfo} key = {prod._id} prod = {prod}></ProductCard>)
            }
            { modalinfo&& <BookModal setmodalinfo={setmodalinfo} modalinfo={modalinfo}></BookModal>}
            
        </div>
    );
};

export default AllProducts;