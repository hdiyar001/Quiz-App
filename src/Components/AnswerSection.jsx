import styles from './AnswerSection.module.css';
import React, { useEffect, useState } from 'react';


export function AnswerSection(props) {
    const [phase, setPhase] = useState(false);

    const StyledDiv = styled.div`
    background-color: #8db1fe;
    color: white;
    cursor: pointer;
  
    &:hover {
    background-color: #834ae2;
    color: white;
    }
  
    &:active {
    background-color: #e59b66;
    color: black;
    }
  `;

    function redirectOnclickHandler() {
        setIsClicked(true)
        props.handleOnlick(70);
    }
    return (
        <div className={styles.answer_section} style={StyledDiv} onClick={redirectOnclickHandler} >
            <p>{props.answer.text}</p>
        </div >
    )
}