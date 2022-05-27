import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../Home/Shared/Loading';

const Users = () => {

    const [users, setUsers] = useState('')
    useEffect(() => {
        fetch(`https://sheltered-sea-15450.herokuapp.com/user`)
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