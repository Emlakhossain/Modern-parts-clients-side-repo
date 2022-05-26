import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyPurchase = () => {
    const [buyers, setBuyers] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {

        fetch(`http://localhost:5000/booking`)
            .then(res => res.json())
            .then(data => setBuyers(data))

    }, [])

    return (
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Products</th>
                        <th>Email</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map(b => <tr>
                            <th>1</th>
                            <td>{b.purchaser}</td>
                            <td>{b.productName}</td>
                            <td>{b.quantity}</td>
                            <td>pending</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyPurchase;