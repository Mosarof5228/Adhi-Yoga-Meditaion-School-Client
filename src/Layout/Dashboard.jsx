import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import useAdmin from '../hooks/useAdmin';
import useInStructor from '../hooks/useInStructor';


const Dashboard = () => {
    // const isAdmin = true;

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInStructor();
    // const isInstructor = false;
    // const isAdmin = true;
    // const isInstructor = true;
    console.log("admin", isAdmin)
    console.log("instructor", isInstructor)
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  mt-32 ml-10">

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>

            </div>
            <div className="drawer-side bg-black ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 text-white ">

                    {isAdmin ? (
                        <><li><NavLink to="/dashboard/manageclasses">Manage Classes</NavLink>
                        </li>
                            <li><NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
                            </li></>
                    ) : isInstructor ? (
                        <><li><NavLink to="/dashboard/addAClass">Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/myClasses">My Classes</NavLink></li>
                        </>
                    ) : (
                        <>
                            <li><NavLink to="/dashboard/mySelectedClasses">My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/myEnrollClass">My Enrolled Classes</NavLink></li>
                            <li><NavLink to="/dashboard/paymentHistory"> Payment History</NavLink></li>
                        </>
                    )}

                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;