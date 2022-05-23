import React from 'react';

const ClientsReview = () => {
    return (
        <div className='drop-shadow-lg mb-20'>
            <h2 className="text-3xl font-bold text-center text-secondary my-20">
                Customer Reviews

            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                <div class="card w-96 bg-base-100 shadow-xl ml-10">
                    <div class="avatar justify-center">
                        <div class="w-24 mask mask-hexagon">
                            <img src="https://api.lorem.space/image/face?hash=55350" />
                        </div>
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl ml-10">
                    <div class="avatar justify-center">
                        <div class="w-24 mask mask-hexagon">
                            <img src="https://api.lorem.space/image/face?hash=55350" />
                        </div>
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl ml-10">
                    <div class="avatar justify-center">
                        <div class="w-24 mask mask-hexagon">
                            <img src="https://api.lorem.space/image/face?hash=55350" />
                        </div>
                    </div>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions">
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsReview;