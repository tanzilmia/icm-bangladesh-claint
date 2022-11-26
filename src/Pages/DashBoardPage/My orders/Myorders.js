
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import  {myContext} from '../../../contextApi/Authcontext'
const Myorders = () => {
    const {user} = useContext(myContext)
    const {data : bookedproduct =[]} = useQuery({
        queryKey : ['bookingproduct',user?.email],
        queryFn : async ()=>{
            const res = await fetch(`http://localhost:5000/bookingproduct?email=${user?.email}`)
            const data = await res.json()
            return data
        }
    })
    return (
        <div>
            <h2>My Orders {bookedproduct.length} </h2>
        </div>
    );
};

export default Myorders;