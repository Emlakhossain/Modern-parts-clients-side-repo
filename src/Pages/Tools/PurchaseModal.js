import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseModal = ({ purchase, setPurchase }) => {
    const [user, loading, error] = useAuthState(auth);
    const { name, price, quantity, _id } = purchase;

    const handleFormSubmit = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const booking = {
            productId: _id,
            product: name,
            buyer: user.email,
            quantity: quantity,
            BuyerName: user.displayName,
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`successfully Order done${name}`)
                }
                else {
                    toast.error(`Already added `)
                }
                setPurchase(null)
            })

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h4 class="font-bold text-xl text-secondary">Product Name: {name}!</h4>
                    <form onSubmit={handleFormSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>

                        <input type="text" name='quantity' placeholder='quantity' value={quantity || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" disabled name="Name" value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='Email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='Phone' placeholder='phone Number' class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Purchase Order" class="btn btn-secondary w-full max-w-xs" />

                    </form>
                    <div class="modal-action">

                        <label htmlFor="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;