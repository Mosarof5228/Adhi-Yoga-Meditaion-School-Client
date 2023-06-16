import React from 'react';
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const ShowClass = ({ singleData }) => {
    const { user } = useContext(AuthContext);
    const { className, instructorEmail, classImage, instructorName, totalStudent, price, seats, _id } = singleData;
    console.log(singleData);

    const handleSelectClass = () => {
        if (user && user.email) {


            const selectClass = {
                classImage, className, email: user.email, instructorName, price, seats, classId: _id
            }

            fetch('https://adhi-yoga-meditation-school-server.vercel.app/selectedClass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class Add On The Selected Class',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    };

    return (
        <div className='grid grid-cols-2 lg:grid-cols-3'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={classImage} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {instructorName}
                        <div className="badge badge-secondary">Email:{instructorEmail}</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                        <button onClick={() => handleSelectClass(singleData)}>Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowClass;