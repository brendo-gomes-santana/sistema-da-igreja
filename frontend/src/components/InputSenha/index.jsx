import React, { useState } from 'react'

import { RiLockPasswordFill } from 'react-icons/ri';
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import styles from './style.module.scss';

export default function InputSenha({mostrarIcon,register,...rest}) {

    const [senhaAmostrar, setSenhaAmostrar] = useState(false)

    return (
        <div className={styles.COntainerSenha}>
            {mostrarIcon && <RiLockPasswordFill />} 
            <input type={senhaAmostrar ? 'text' : 'password'} {...register('senha')} {...rest}/>
            <span
                onClick={() => setSenhaAmostrar(!senhaAmostrar)}
            >{senhaAmostrar ? <FaEye size={30}/> : <FaEyeSlash size={30}/>}</span>
        </div>
    )
}
