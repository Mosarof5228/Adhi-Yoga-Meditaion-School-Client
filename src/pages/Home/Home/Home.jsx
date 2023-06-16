import React from 'react';
import Meditation from '../../MeditationSection/Meditation';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Meditation></Meditation>
        </div>
    );
};

export default Home;