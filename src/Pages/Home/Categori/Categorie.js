import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Card from './Card';

const Categorie = () => {
    const {data: catetories = [], isLoading} = useQuery({
        queryKey : ['categories'],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/categories`)
            const data = await res.json()
            return data
        }
    })



    return (
        <div className='md:max-w-[940px] md:mx-auto grid gap-4 md:grid-cols-3 lg:grid-cols-3'>
            {
                catetories.map(categories=> <Card categories={categories}></Card>)
            }
        </div>
    );
};

export default Categorie;