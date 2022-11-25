import { useQuery } from "@tanstack/react-query";
import React from "react";

const AllByer = () => {
  const { data: bayers = [], isLoading } = useQuery({
    queryKey: [""],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/bayer`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bayers.map((bayer, index) => (
            <tr key={bayer._id}>
              <th>{index + 1}</th>
              <th> {bayer.name} </th>
              <th>{bayer.email}</th>
              <th><button>Delete</button></th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllByer;
