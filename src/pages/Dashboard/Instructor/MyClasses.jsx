import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../providers/AuthProvider';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: MyClasses = [] } = useQuery(['MyClasses'], async () => {
        const res = await axiosSecure.get(`/myClasses?email=${user?.email}`)
        console.log(MyClasses)
        return res.data;
    })
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
                        <th>Feedback</th>
                        <th>Enrolled Student</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        MyClasses.map((cls, index) => <tr key={cls._id}>
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
                            <td>{cls.feedback}</td>
                            <td className="text-center">{cls.totalStudent}</td>

                        </tr >)
                    }
                </tbody >
            </table >
        </div >

    );
};

export default MyClasses;