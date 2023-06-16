import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ShowClass from './ShowClass';

const Classes = () => {
    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
        fetch('https://adhi-yoga-meditation-school-server.vercel.app/approvedClasses')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <div className='my-4 grid grid-cols-2 md:grid-cols-3'>
            {
                data.map(singleData => <ShowClass
                    singleData={singleData}
                    key={singleData._id}
                >

                </ShowClass>)
            }
        </div>
    );
};

export default Classes;