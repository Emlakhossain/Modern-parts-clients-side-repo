import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('https://sheltered-sea-15450.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div>
            <h2 className='text-center text-secondary font-bold text-4xl mt-40'>Our Products</h2>
            <p className='text-center mb-20 italic text-secondary'><small>Hello dear clients, welcome to our company. <br /> This is very trustable modern car parts provider company from 1890 to still...</small></p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-auto'>
                {
                    parts.map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;