import styles from './Chat.module.css';

const ChatBlock = (props) => {
  return (
    <div className={styles.chatBlock}>
      <h2 className={styles.title}>Messages</h2>
      {props.chatData.map((el, i) => {
        return (
          <div className={styles.comment} key={i}>
            {i + 1} {el.text}
          </div>
        );
      })}
    </div>
  );
};

export default ChatBlock;
