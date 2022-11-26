import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { myContext } from "../contextApi/Authcontext";
import useAdminHook from "../CustomeHOOk/MakeAdmin/useAdminHook";
import useSellerHook from "../CustomeHOOk/MakeSellerHook/useSellerHook";
import Navbar from "../Pages/Home/navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(myContext);
  const [admin] = useAdminHook(user?.email);
  const [seller] = useSellerHook(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashbord">My orders </Link>
            </li>

            {seller && (
              <>
                <li>
                  <Link to="/dashbord/myproducts">My products </Link>
                </li>

                <li>
                  <Link to="/dashbord/addproducts">Add Products </Link>
                </li>
              </>
            )}

            {admin && (
              <>
                <li>
                  <Link to="/dashbord/addproducts">Add Products </Link>
                </li>
                <li>
                  <Link to="/dashbord/allseller"> all Seller </Link>
                </li>
                <li>
                  <Link to="/dashbord/allbyer">all byer</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
