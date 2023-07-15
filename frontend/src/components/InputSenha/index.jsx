import React, { useState } from 'react'

import { RiLockPasswordFill } from 'react-icons/ri';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import styles from './style.module.scss';

export default function InputSenha() {

    const [senhaAmostrar, setSenhaAmostrar] = useState(false)

    return (
        <div className={styles.container}>
            <RiLockPasswordFill /> 
            <input type={senhaAmostrar ? 'text' : 'password'} />
            <span
                onClick={() => setSenhaAmostrar(!senhaAmostrar)}
            >{senhaAmostrar ? <FaEye /> : <FaEyeSlash />}</span>
        </div>
    )
}
