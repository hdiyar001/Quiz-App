import { AnswerSection } from './AnswerSection';
import classes from './Quiz.module.css';
// import quizQuestions from './questionArray';
export function Quiz() {
    // console.log(quizQuestions);
    return (
        <div className={classes.quiz_container}>
            <progress value={50} max="100"></progress>
            <h2>How do you typically render list content in React apps?</h2>
            <AnswerSection />
            <AnswerSection />
            <AnswerSection />
            <AnswerSection />
            <AnswerSection />
        </div >
    );
}