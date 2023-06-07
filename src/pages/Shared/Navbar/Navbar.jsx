import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOUt = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOption = <>
        <li className='text-xl font-bold'><Link>Home</Link></li>
        <li className='text-xl font-bold'><Link>Instructors</Link></li>
        <li className='text-xl font-bold'><Link>Classes</Link></li>

        {
            user ? <>
                <li className='text-xl font-bold'><Link to='/dashboard'>Dashboard</Link></li>
                <button onClick={handleLogOUt} className="btn btn-active btn-ghost">Logout</button>
            </>

                : <>      <li className='text-xl font-bold'><Link to='/login'>Login</Link></li></>
        }
    </>
    return (
        <>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl font-bold">A.Y MEDITATION SCHOOL</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>

        </>
    );
};

export default Navbar;