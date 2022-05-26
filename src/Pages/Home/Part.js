import React from 'react';

const Part = ({ part }) => {
    const { name, img, price, description, quantity } = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure class="">
                <img height={100} src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-start">
                <h2 class="card-title">{name}</h2>
                <p className='text-start'>{description}</p>
                <p className='text-start'>Per Unite:${price}</p>
                <p className='text-start'>Stock:{quantity}</p>
                <div class="card-actions items-center">
                    <button class="btn btn-outline w-60 text-secondary mt-10">LEARN MORE</button>
                </div>
            </div>
        </div>
    );
};

export default Part;