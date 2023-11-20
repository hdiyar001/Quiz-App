import { useEffect, useState } from 'react';
import { AnswerSection } from './AnswerSection';
import classes from './Quiz.module.css';
export function Quiz({ question }) {
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    let prgress = timer % 11;
    return (
        <div className={classes.quiz_container}>
            <progress value={prgress} max="10"></progress>
            <h2>{question.question}</h2>
            {question.answers.map((answer, key) => < AnswerSection key={key} answer={answer} />)}
        </div >
    );
}