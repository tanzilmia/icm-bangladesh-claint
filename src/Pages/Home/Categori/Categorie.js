import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from './Card';

const Categorie = () => {
    const {data: catetories = [], isLoading} = useQuery({
        queryKey : ['categories'],
        queryFn : async ()=>{
            const res = await fetch(`https://icm-server.vercel.app/categories`)
            const data = await res.json()
            return data
        }
    })

if(isLoading){
    return <progress className="progress w-56"></progress>
}

    return (
        <>
            <h1 className='text-center text-2xl my-10 lg:text-5xl  md:text-5xl text-[#45cdf6]'> Sellect Your Favorite Brand Products </h1>
         <div className='md:max-w-[940px] md:mx-auto grid gap-4 md:grid-cols-3 lg:grid-cols-3'>
           
           {
              catetories &&  catetories.map(categories=> <Card categories={categories}></Card>)
           }
       </div>
        </>
       
    );
};

export default Categorie;

