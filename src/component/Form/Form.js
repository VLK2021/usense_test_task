import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import './FormStyle.css';

const Form = () => {
    const { register } = useForm();
    const [currentPassword, setCurrentPassword] = useState('');

    const handleChange = (event) => {
        setCurrentPassword(event.target.value);
    };


    return (
        <div className={'form'}>
            <form className={'flex'}>
                <input type="password" {...register('password')}
                       onChange={handleChange}
                       placeholder={'...password'}
                />
            </form>
        </div>
    );
};

export { Form };
