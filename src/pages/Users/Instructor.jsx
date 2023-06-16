import React, { useEffect, useState } from 'react';

const Instructor = () => {
    const [popularInstructors, setPopularInstructors] = useState([]);
    useEffect(() => {
        fetch('https://adhi-yoga-meditation-school-server.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                setPopularInstructors(data)
            })
    }, [])

    return (
        <div>
            <h2>this is instructor</h2>
            <p>{popularInstructors.length}</p>
        </div>
    );
};

export default Instructor;