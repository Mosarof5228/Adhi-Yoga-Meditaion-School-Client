import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyEnrollClasses = () => {
    const { user } = useContext(AuthContext);
    const [enrollClass, setEnrollClass] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/enrolled/${user.email}`)
            .then(res => res.json())
            .then(data => setEnrollClass(data))
    }, [])
    return (
        <div className="overflow-x-auto w-full">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                #
                            </label>
                        </th>
                        <th>Image  Name</th>
                        <th>Instructor email</th>
                        <th>Available seats</th>
                        <th>Price</th>
                        <th>Status</th>



                    </tr>
                </thead>
                <tbody>
                    {
                        enrollClass.map((cls, index) => <tr key={cls._id}>
                            <th>
                                <label>
                                    {index + 1}
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.classImage}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{cls.className}</div>

                                    </div>
                                </div>
                            </td>
                            <td>{cls.instructorEmail}</td>
                            <td className="text-center">{cls.seats}</td>
                            <td>{cls.price}</td>
                            <td>{cls.status}</td>



                        </tr >)
                    }
                </tbody >
            </table >
        </div >
    );
};

export default MyEnrollClasses;