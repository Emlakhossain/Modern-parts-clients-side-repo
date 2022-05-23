import React from 'react';
import img from '../../img/my-img.jpg';

const Portfolio = () => {
    return (
        <>
            <div class="card lg:card-side bg-base-100 shadow-xl">

                <div class="card-body w-3/4">
                    <h2 class="card-title text-5xl font-bold text-secondary">Hello Imran ahmed!</h2>
                    <p>Junior Font End Web Developer</p>

                </div>
                <div class="avatar">
                    <div class=" rounded-xl">
                        <img src={img} alt="Album" />
                    </div>
                </div>


            </div>
        </>
    );
};

export default Portfolio;