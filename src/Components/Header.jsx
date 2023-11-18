import styles from "./Headerstyle.module.css";

const Header = () => {
  return (
    <div className={styles.Header}>
      <img src="quiz-logo.png" alt="image1" className={styles.image}></img>
      <h1 className={styles.Headertitle}>REACTQUIZ</h1>
    </div>
  );
};

export default Header;
