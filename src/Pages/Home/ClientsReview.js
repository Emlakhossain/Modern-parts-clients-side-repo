import React from 'react';
import customer1 from '../../img/customer1.jpg';
import customer2 from '../../img/customer2.png';

const ClientsReview = () => {
    return (
        <div className='drop-shadow-lg my-40'>
            <h2 className="text-3xl font-bold text-center text-secondary my-20">
                Customer Reviews

            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
                <div class="card w-96 bg-base-100 shadow-xl ml-10">
                    <div class="avatar justify-center">
                        <figure className='p-3'>
                            <img src={customer2} />
                        </figure>
                    </div>
                    <div class="card-body items-center text">
                        <h2 class="card-title">Jahan Botha</h2>
                        <p className='text-start'>This is good product and good services from Modern parts Bd.</p>
                        <div class="rating justify-start items-start">
                            Rating:  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl ml-10">
                    <div class="avatar justify-center">
                        <figure className='p-3'>
                            <img src={customer2} />
                        </figure>
                    </div>
                    <div class="card-body items-center text">
                        <h2 class="card-title">Mack Donald</h2>
                        <p className='text-start'>This is good product and good services from Modern parts Bd.</p>
                        <div class="rating justify-start items-start">
                            Rating:  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl ml-10">
                    <div class="avatar justify-center">
                        <figure className='p-3'>
                            <img src={customer2} />
                        </figure>
                    </div>
                    <div class="card-body items-center ">
                        <h2 class="card-title">Hunter Man</h2>
                        <p className='text-start'>This is good product and good services from Modern parts Bd.</p>
                        <p class="rating items-start">
                            Rating:  <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsReview;