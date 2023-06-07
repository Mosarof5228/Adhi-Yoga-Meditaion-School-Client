import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";

const Dashboard = () => {
    const isAdmin = false;
    const isInstructor = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-black">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 bg-black text-white  text-base-content">
                    {/* Sidebar content here */}
                    {isAdmin ? (
                        <li>
                            <NavLink to="/dashboard/adminhome">
                                <FaHome />
                                Admin Home
                            </NavLink>
                        </li>
                    ) : isInstructor ? (
                        <li>
                            <NavLink to="/dashboard/instructorhome">
                                <FaHome />
                                Instructor Home
                            </NavLink>
                        </li>
                    ) : (
                        <li><NavLink>student</NavLink></li>
                    )}


                    <div className='divider'></div>
                    <li><NavLink to='/'> <FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to='/menu'>Our Menu</NavLink></li>
                    <li><NavLink to='/order/salad'>Order</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;