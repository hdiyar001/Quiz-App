import styles from './AnswerSection.module.css';
export function AnswerSection({ answer }) {
    return (
        <>
            <div className={styles.answer_section}>
                <p>{answer.text}</p>
            </div>
        </>
    )

}