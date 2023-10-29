import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.link}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.link}>
              <Link to="/chat">Chat</Link>
            </li>
            <li className={styles.link}>
              <Link to="/test-api">Api data</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
