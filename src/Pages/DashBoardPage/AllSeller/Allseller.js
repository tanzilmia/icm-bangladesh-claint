import { useQuery } from '@tanstack/react-query';
import React from 'react';


const Allseller = () => {

    const {data : sellers = [], isLoading} = useQuery({
        queryKey : [''],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/seller`)
            const data = await res.json()
            return data
        }
    })

    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, index) => (
              <tr key={seller._id}>
                <th>{index + 1}</th>
                <th> {seller.name} </th>
                <th>{seller.email}</th>
                <th><button className='btn btn-sm btn-primary'>Verify</button></th>
                <th><button className='btn btn-sm btn-warning'>Delete</button></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default Allseller;