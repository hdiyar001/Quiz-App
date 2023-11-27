import styles from "./AnswerSection.module.css";
import styled from "styled-components";


export function AnswerSection(props) {
  function redirectOnclickHandler() {
    props.handleOnlick(props.id);
  }

  return (
    <StyledDiv
      bgcolor={props.Color}
      className={styles.answer_section}
      onClick={redirectOnclickHandler}
    >
      <p>{props.answer.text}</p>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
    background-color: ${props => props.bgcolor};
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