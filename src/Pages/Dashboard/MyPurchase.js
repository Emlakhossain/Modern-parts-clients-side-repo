import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyPurchase = () => {
    const [buyers, setBuyers] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {

            fetch(`http://localhost:5000/booking?buyer=${buyers.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer${localStorage.getItem('accessToken')}`
                }

            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => setBuyers(data))

        }
    }, [user])

    return (
        <div class="overflow-x-auto">
            <table class="table w-full ">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Products</th>
                        <th>Email</th>
                        <th>Qty</th>
                        <th>Status</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        buyers.map((b, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{b.BuyerName}</td>
                            <td>{b.product}</td>
                            <td>{b.buyer}</td>
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