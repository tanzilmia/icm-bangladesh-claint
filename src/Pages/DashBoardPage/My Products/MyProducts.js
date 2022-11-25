import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { myContext } from "../../../contextApi/Authcontext";

const MyProducts = () => {
  const { user } = useContext(myContext);
  const { data: myproducts = [], isLoading } = useQuery({
    queryKey: ["myproduct", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/myproduct?email=${user?.email}`,{
          headers: {
            authorization: `bearer ${localStorage.getItem('icmToken')}`
        }
        }
      );
      const data = await res.json();
      return data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>product Name</th>
              <th>Price </th>
              <th> Status </th>
              <th> Advertise </th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>
           {
            myproducts.length>0 ?
            <>
             {
                myproducts.map((product) => (
                    <tr key={product._id}>
                      <th></th>
                      <th> {product.product_name} </th>
                      <th> {product.product_price} </th>
                      <th> <button className="btn btn-sm btn-success">available</button> </th>
                      <th>
                        {" "}
                        <button className="btn btn-sm btn-info">start Campain</button>{" "}
                      </th>
                      <th>
                        {" "}
                        <button className="btn btn-sm btn-warning">Delete</button>{" "}
                      </th>
                    </tr>
                  ))
             }
            </>
            :
            <h3 className="text-4xl text-center text-success">No Product Abailable For Sells Add More  </h3>
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
