import { Route, Routes } from 'react-router-dom';
import styles from './Main.module.css';
import Home from '../home/Home';
import Chat from '../chat/Chat';
import TestApi from '../test-api/TestApi';

const Main = () => {
  return (
    <main className={styles.main}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/test-api" element={<TestApi />} />
      </Routes>
    </main>
  );
};

export default Main;
