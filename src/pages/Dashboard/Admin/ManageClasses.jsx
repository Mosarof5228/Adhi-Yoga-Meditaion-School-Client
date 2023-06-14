import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })

    const handleApproved = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/classes?id=${id}&status=approved`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'ok',
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    };

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
                        <th>className</th>
                        <th>instructorName</th>
                        <th>Available seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Feedback</th>
                        <th>Enrolled Student</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((cls, index) => <tr key={cls._id}>
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
                            <td>{cls.instructorName}</td>
                            <td className="text-center">{cls.seats}</td>
                            <td>{cls.price}</td>
                            <td>{cls.status}</td>

                            <td>{cls.feedback}</td>

                            <td className="text-center">{cls.totalStudent}</td>
                            <td><button onClick={() => handleApproved(cls._id)}>Approved</button></td>

                        </tr >)
                    }
                </tbody >
            </table >
        </div >
    );
};

export default ManageClasses;