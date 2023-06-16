import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';


const PopularClasses = () => {

    const [popularClasses, setPopularClasses] = useState([]);
    console.log("popular class", popularClasses)
    useEffect(() => {
        fetch('https://adhi-yoga-meditation-school-server.vercel.app/popularClass')
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data)
            })
    }, [])
    return (
        <div>
            <Helmet>
                <title>A.Y Meditation || Popular Classes</title>
            </Helmet>

            <h2 className='uppercase text-center text-3xl font-bold'>this is popular classes</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-4'>
                {
                    popularClasses.map(popularClass =>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src={popularClass.classImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{popularClass.className}</h2>
                                <p className='font-bold'>Price: {popularClass.price}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>



        </div>
    );
};

export default PopularClasses;