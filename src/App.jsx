import { Quiz } from "./Components/Quiz";
import Header from "./Components/Header";
import styles from "./Appstyle.module.css";

function App() {
    return (
        <>
            <div className={styles.App}>
                <Header></Header>
                <Quiz />
            </div>
        </>
    );
}

export default App;
        