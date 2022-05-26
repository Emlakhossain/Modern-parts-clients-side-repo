import React, { useEffect, useState } from 'react';
import Products from './Products';
import PurchaseModal from './PurchaseModal';

const Tools = () => {
    const [products, setProducts] = useState([]);
    const [purchase, setPurchase] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='my-40'>
            <h2 className='text-center text-secondary font-bold text-4xl my-20'>products List:</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto'>
                {
                    products.map(product => <Products
                        key={product}
                        product={product}
                        setPurchase={setPurchase}
                    ></Products>)
                }
            </div>
            {
                purchase && <PurchaseModal
                    purchase={purchase}
                    setPurchase={setPurchase}
                ></PurchaseModal>
            }
        </div>
    );
};

export default Tools;