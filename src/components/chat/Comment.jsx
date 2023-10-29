import { Link } from 'react-router-dom';
import styles from './Chat.module.css';

const Comment = (props) => {
  return (
    <div className={styles.block}>
      <label className={styles.label}>Напишите комментарий</label>
      <input
        className={styles.input}
        value={props.inputValue}
        onChange={(e) => props.setInputValue(e.target.value)}
      />
      <a href="#" className={`${styles.btn} ${styles.btnWhite}`} onClick={props.changeChat}>
        Отправить
      </a>
      <a
        href="#"
        className={`${styles.btn} ${styles.btnWhite} ${styles.btnSecond}`}
        onClick={props.deleteChat}>
        Создать новый чат
      </a>

      {props.showDialog && (
        <p>
          Вы не авторизованы, перейдите по <Link to="/">ссылке</Link>
        </p>
      )}
    </div>
  );
};

export default Comment;
