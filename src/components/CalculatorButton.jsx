import React, { useState, useEffect } from 'react';
import './Calculator.css';

function CalculatorButton({key,value,onClick}) {
    return <button className='calculator-button'
     onClick={()=> {
        onClick(value)
     }} >{value}</button>
}

export default CalculatorButton;