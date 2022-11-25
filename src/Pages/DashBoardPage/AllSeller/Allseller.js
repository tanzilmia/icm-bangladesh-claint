import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { myContext } from '../../../contextApi/Authcontext';


const Allseller = () => {
   const {user} = useContext(myContext)
    const {data : sellers = [], isLoading} = useQuery({
        queryKey : ['seller',user?.email],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/seller?email=${user?.email}`,{
              headers: {
                authorization: `bearer ${localStorage.getItem('icmToken')}`
            }
            });
            const data = await res.json()
            return data
        }
    })

    if(isLoading){
      return <p>Loadding ...</p>
    }

    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>serial</th>
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