import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Home/Shared/Loading';

const Users = () => {

    const [users, setUsers] = useState('')
    useEffect(() => {
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2>All Users:{users.length}</h2>
        </div>
    );
};

export default Users;