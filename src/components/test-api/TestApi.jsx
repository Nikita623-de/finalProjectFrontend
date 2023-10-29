import { useEffect, useState } from 'react';
import styles from './TestApi.module.css';

const TestApi = () => {
  const [players, setPlayers] = useState([]);
  const [isLoad, setIsLoad] = useState(true);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'e1faf7905emsh7a7726a78497a72p126b46jsna49b3e05a570',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
    };

    fetch('https:free-nba.p.rapidapi.com/players?page=0&per_page=25', options)
      .then((res) => res.json())
      .then((res) => {
        setPlayers(res.data);
        setIsLoad(false);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <div className={styles.players}>
        <h1 className={styles.h1}>Игроки NBA</h1>
        {isLoad && <h2 className={styles.h2}>Игроки Загружаются...</h2>}
        <ul className={styles.list}>
          {players.map((item, i) => {
            const firstName = item.first_name;
            const lastName = item.last_name;
            return (
              <li className={styles.player} key={item.id}>
                {i + 1}. {firstName} {lastName}
                <img
                  style={{
                    width: '20px',
                    height: '20px',
                    marginLeft: '10px',
                    position: 'relative',
                    top: '2.5px',
                    cursor: 'pointer',
                  }}
                  src="recycle-bin.png"
                  alt="del"
                  onClick={() => {
                    setPlayers(players.filter((delItem) => item.id !== delItem.id));
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default TestApi;
