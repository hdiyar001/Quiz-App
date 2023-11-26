import { useEffect, useState } from 'react';
import { AnswerSection } from './AnswerSection';
import classes from './Quiz.module.css';

const maxInterval = 60;
export function Quiz({ question }) {
    const [timer, setTimer] = useState(maxInterval);
    const [sleep, setSleep] = useState(1000);
    // const [isQuestionDone, setIsQuestionDone] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer <= 0) {
                setTimer(maxInterval);
                setSleep(1000);
            } else {
                setTimer(timer => (timer - 1));
            }
        }, sleep);

        return () => clearInterval(interval);
    }, [timer]);

    return (
        <div className={classes.quiz_container}>

            <progress value={timer} max={maxInterval}></progress>
            <h2 > {question.question}</h2>

            {question.answers.map((answer, key) => < AnswerSection key={key} answer={answer}
                handleOnlick={(sleep) => { setSleep(sleep); setTimer(maxInterval) }}
            />)}
        </div >
    );
}