


import React from 'react';
import { useContext } from 'react';
import useSelectedClass from '../../../hooks/useSelectedClass';
import { AuthContext } from '../../../providers/AuthProvider';

const MySelectedClasses = () => {
    const { user } = useContext(AuthContext)
    const [selectedCls] = useSelectedClass();


    return (
        <div className="w-full">
            <div className="uppercase font-semibold text-2xl flex justify-between items-center mb-5">
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class Name</th>
                            <th>Price</th>
                            <th>Available Seats</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectedCls.map((slc, index) => <tr key={slc._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={slc.classImage} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {slc.className}
                                </td>
                                <td>$ {slc.price}</td>
                                <td>$ {slc.seats}</td>
                                {/* <td className="">
                                    <Link to={`/dashboard/payment/${slc._id}`}><button className="btn bg-black hover:bg-slate-700 text-white ">Pay</button></Link>
                                </td> */}
                                {/* <td className="">
                                    <button onClick={() => handleDelete(slc)} className="btn text-white bg-red-600"><FaTrashAlt /></button>
                                </td> */}
                            </tr>)
                        }

                        {/* row 2 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySelectedClasses;


