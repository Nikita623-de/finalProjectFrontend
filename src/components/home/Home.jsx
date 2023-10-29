import { useState } from 'react';
import { useLocalStorage } from '../../hook/useLocalStorage';
import styles from './Home.module.css';

const Home = () => {
  const [user, setUser] = useLocalStorage('USER', '');
  const [inputValue, setInputValue] = useState('');

  const logIn = () => {
    setUser(inputValue);
  };
  return (
    <>
      {user && (
        <div className={styles.block}>
          <h2 className={styles.hello}>Здравствуйте, {user}</h2>
          <a
            href="#"
            className={`${styles.btn} ${styles.btnWhite} ${styles.btnOut}`}
            onClick={() => setUser('')}>
            Выйти
          </a>
        </div>
      )}

      {!user && (
        <div className={styles.block}>
          <label className={styles.label}> Введите своё имя</label>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <a href="#" className={`${styles.btn} ${styles.btnWhite}`} onClick={logIn}>
            Войти
          </a>
        </div>
      )}
    </>
  );
};

export default Home;
