import React from 'react';

const Products = ({ product, setPurchase }) => {
    const { img, name, description, quantity, price } = product;
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
                    <div class="card-actions justify-center">

                        <label htmlFor="booking-modal"

                            onClick={() => setPurchase(product)}
                            class="btn btn-outline w-60 text-secondary mt-10">Purchase Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;