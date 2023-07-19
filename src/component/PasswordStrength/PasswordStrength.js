import React, {useEffect, useState} from 'react';

import './PasswordStrengthStyle.css';


const PasswordStrength = ({currentPassword}) => {
    const [passwordName, setPasswordName] = useState("Empty");
    const [passwordColorFirst, setPasswordColorFirst] = useState('gray')
    const [passwordColorSecond, setPasswordColorSecond] = useState('gray')
    const [passwordColorThird, setPasswordColorThird] = useState('gray')


    useEffect(() => {
        if (currentPassword.length > 0) {
            if (currentPassword.length >= 8) {
                const hasEasy = /^[a-zA-Z0-9!@#$%^&*()]+$/.test(currentPassword);
                const hasMedium = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()])|(?=.*[a-zA-Z])(?=.*[0-9])|(?=.*[0-9])(?=.*[!@#$%^&*()])/.test(currentPassword);
                const hasStrong = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*().,])(?=.*[0-9])/.test(currentPassword);

                if (hasEasy) {
                    setPasswordName('Easy');
                    setPasswordColorFirst('red');
                    setPasswordColorSecond('gray');
                    setPasswordColorThird('gray');
                }
                if (hasMedium) {
                    setPasswordName('Medium');
                    setPasswordColorFirst('yellow');
                    setPasswordColorSecond('yellow');
                    setPasswordColorThird('gray');
                }
                if (hasStrong) {
                    setPasswordName('Strong');
                    setPasswordColorFirst('green');
                    setPasswordColorSecond('green');
                    setPasswordColorThird('green');
                }
            } else {
                setPasswordName('Easy');
                setPasswordColorFirst('red');
                setPasswordColorSecond('red');
                setPasswordColorThird('red');
            }
        } else {
            setPasswordName('Empty');
            setPasswordColorFirst('gray');
            setPasswordColorSecond('gray');
            setPasswordColorThird('gray');
        }
    }, [currentPassword]);


    return (
        <div className={'passwordStrength width flex'}>
            <p>{passwordName}</p>

            <div className={'passwordStrength-blocks flex'}>
                <div className={'passwordStrength-blocks-one'} style={{backgroundColor: passwordColorFirst}}></div>
                <div className={'passwordStrength-blocks-one'} style={{backgroundColor: passwordColorSecond}}></div>
                <div className={'passwordStrength-blocks-one'} style={{backgroundColor: passwordColorThird}}></div>
            </div>
        </div>
    );
};

export {PasswordStrength};