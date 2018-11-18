import React from 'react';
import './button.css'

const Btn = (props) =>{
    return (
        <button className={props.className}>{props.text}</button>
    )
}

export default Btn