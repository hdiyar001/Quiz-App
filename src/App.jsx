import { Quiz } from "./Components/Quiz";
import Header from "./Components/Header";
import styles from "./Appstyle.module.css";
import ArrayContext from "./Ressources/questionArray-context";
import { useContext } from "react";

function App(props) {
    const ctx = useContext(ArrayContext);

    return (

        <div className={styles.App}>
            <Header></Header>

            <Quiz question={ctx.questionArray[0]} />
        </div>

    );
}

export default App;
