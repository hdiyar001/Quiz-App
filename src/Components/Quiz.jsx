import { useEffect, useState } from 'react';
import { AnswerSection } from './AnswerSection';
import classes from './Quiz.module.css';

const maxInterval = 60;
export function Quiz({ question }) {
    const [timer, setTimer] = useState(maxInterval);
    const [sleep, setSleep] = useState(1000);
    const [phase, setPhase] = useState(0); // 0 before answering, analysing the answer 1, Results 2 
    const [answerSectionColor, setanswerSectionColor] = useState("#8db1fe");
    // const [isQuestionDone, setIsQuestionDone] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer <= 0) {
                setTimer(maxInterval);
                setSleep(1000);
            } else {
                switch(phase) {
                    case 0 : setSleep(1000); setanswerSectionColor("#8db1fe");
                    break;
                    case 1 : setSleep(70); setanswerSectionColor("#e59b66");
                    break;
                    case 2 : setSleep(70); setanswerSectionColor("red");
                    break;
                }
                setTimer(timer => (timer - 1));
            }
        }, sleep);

        return () => clearInterval(interval);
    }, [phase,timer]);

        console.log(phase);

    return (
        <div className={classes.quiz_container}>

            <progress value={timer} max={maxInterval}></progress>
            <h2 > {question.question}</h2>

            {question.answers.map((answer, key) => < AnswerSection key={key} answer={answer} Color={answerSectionColor}
                handleOnlick={() => { setPhase(phase+1); setTimer(maxInterval) }}
            
            />)}
        </div >
    );
}