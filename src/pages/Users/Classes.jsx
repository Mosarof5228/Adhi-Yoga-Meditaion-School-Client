import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ShowClass from './ShowClass';

const Classes = () => {
    const [data, setData] = useState([]);
    console.log(data)
    useEffect(() => {
        fetch('http://localhost:5000/approvedClasses')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])



    //     0
    // :
    // { _id: '6489ed4492131e471f7f72ba', className: 'Md.Tanjil Shordar', price: 55, instructorEmail: 'dfdfd@dfdf.com', classImage: 'https://i.ibb.co/VJrVv8m/Logo-Makr-8ea4-HO.png', … }
    // length
    // :
    // 1

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