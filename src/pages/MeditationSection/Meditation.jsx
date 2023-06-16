import React from 'react';
import img1 from '../../assets/meditation image/img1.jpg'
import img2 from '../../assets/meditation image/img2.jpg'
import img3 from '../../assets/meditation image/img3.png'
import img4 from '../../assets/meditation image/img4.jpg'

const Meditation = () => {
    return (
        <section id="meditation" className="section large-section">
            <div className="container">
                <div className='mx-auto w-full uppercase font-extrabold flex flex-col justify-center items-center'>
                    <h2 className="section-title">Meditation</h2>
                    <p className="section-description">Discover the power of meditation and find inner peace.</p>
                </div>

                <div className="meditation-classes grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                    <div className="meditation-class">
                        <img className='h-96' src={img1} />
                        <h3 className="class-title font-bold">Beginner's Meditation</h3>
                        <p className="class-description">Join our beginner's meditation class to learn the basics of mindfulness and relaxation techniques.</p>
                        <a href="meditation-class1.html" className="btn btn-primary mt-4">Learn More</a>
                    </div>

                    <div className="meditation-class">
                        <img className='h-96' src={img2} />
                        <h3 className="class-title font-bold">Advanced Meditation</h3>
                        <p className="class-description">Take your meditation practice to the next level with advanced techniques and guidance from experienced instructors.</p>
                        <a href="meditation-class2.html" className="btn btn-primary mt-4">Learn More</a>
                    </div>

                    <div className="meditation-class">
                        <img className='h-96' src={img3} alt="Meditation Class 3" />
                        <h3 className="class-title font-bold ">Guided Meditation</h3>
                        <p className="class-description">Experience the soothing benefits of guided meditation sessions led by expert instructors.</p>
                        <a href="meditation-class3.html" className="btn btn-primary mt-4">Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Meditation;