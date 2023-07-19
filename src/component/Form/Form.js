import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

import './FormStyle.css';
import {PasswordStrength} from "../PasswordStrength/PasswordStrength";


const Form = () => {
    const {register} = useForm();
    const [currentPassword, setCurrentPassword] = useState('');

    const handleChange = (event) => {
        setCurrentPassword(event.target.value);
    };


    return (
        <div className={'form'}>
            <p className={'flex'}>Password</p>

            <form className={'flex'}>
                <input type="text"
                       {...register('password')}
                       onChange={handleChange}
                       placeholder={'...password'}
                />
            </form>

            <PasswordStrength currentPassword={currentPassword}/>
        </div>
    );
};

export {Form};
