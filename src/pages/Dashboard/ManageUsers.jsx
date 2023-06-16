import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    const handleAdmin = (user) => {
        console.log(user);
        fetch(`https://adhi-yoga-meditation-school-server.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    };

    const handleInstructor = (user) => {
        fetch(`https://adhi-yoga-meditation-school-server.vercel.app/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    return (
        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Users : {users.length}</h3>
            <div className="overflow-x-auto mx-auto">
                <table className="table table-zebra w-full mx-auto">
                    {/* head */}
                    <thead>
                        <tr className='bg-green-500 text-white'>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th className='bg-yellow-500'>{index + 1}</th>
                                <td className='bg-yellow-500'>{user.name}</td>
                                <td className='bg-yellow-300'>{user.email}</td>
                                <td className='bg-yellow-300'>{user.role === 'admin' ? 'admin' : <button onClick={() => handleAdmin(user)} className="btn bg-purple-400 mx-4 text-white hover:bg-blue-600 border-red-700">
                                    Create Admin
                                </button>}
                                    {user.role === 'instructor' ? 'instructor' : <button onClick={() => handleInstructor(user)} className="btn ml-5  text-white hover:bg-blue-600 bg-blue-300">Make Instructor</button>}

                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ManageUsers;