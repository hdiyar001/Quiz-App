import styles from "./AnswerSection.module.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export function AnswerSection(props) {
 

  const StyledDiv = styled.div`
    background-color: ${props.Color};
    cursor: pointer;
    color: black;
    border: none;
    height: 45px;
    border-radius: 30px;
    margin-top: 8px;
    margin: 8px 45px;
    padding: 5px 0px;

    &:hover {
      background-color: #834ae2;
      color: white;
    }

    &:active {
      background-color: #e59b66;
      color: black;
    }

    p {
      font-size: 14px;
    }
  `;

  function redirectOnclickHandler() {
    props.handleOnlick();
  }
  return (
    <StyledDiv
      className={styles.answer_section}
      onClick={redirectOnclickHandler}
    >
      <p>{props.answer.text}</p>
    </StyledDiv>
  );
}
