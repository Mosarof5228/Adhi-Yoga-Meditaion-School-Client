import React, { useEffect, useState } from 'react';

const Instructor = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    console.log("instructor", popularInstructors)
    useEffect(() => {
        fetch('https://adhi-yoga-meditation-school-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setPopularInstructors(data)
            })
    }, [])

    return (
        <div>
            <h2 className='uppercase text-center font-bold text-3xl'>Popular Instructor</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4'>
                {
                    popularInstructors.map(popularInstructor =>
                        <div>
                            <div className="card w-96 bg-base-100 shadow-xl ">

                                <div className="card-body">
                                    <h2 className="card-title">{popularInstructor.name}</h2>
                                    <p>{popularInstructor.email}</p>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>

                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Instructor;