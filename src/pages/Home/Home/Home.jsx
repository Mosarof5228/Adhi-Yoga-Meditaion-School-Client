import React from 'react';
import Meditation from '../../MeditationSection/Meditation';
import Instructor from '../../Users/Instructor';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Instructor></Instructor>
            <Meditation></Meditation>
        </div>
    );
};

export default Home;