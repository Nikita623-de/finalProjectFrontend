import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hook/useLocalStorage';
import ChatBlock from './ChatBlock';
import Comment from './Comment';
import styles from './Chat.module.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [user] = useLocalStorage('USER');

  useEffect(() => {
    fetch('http://localhost:3001/messages')
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, []);

  const changeChat = () => {
    if (user) {
      fetch('http://localhost:3001/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: `${user}: ${inputValue}` }),
      })
        .then((response) => response.json())
        .then((data) => {
          setMessages([...messages, data]);
          setInputValue('');
        });
    } else {
      setShowDialog(true);
      setInputValue('');
    }
  };

  const deleteChat = () => {
    fetch('http://localhost:3001/messages', {
      method: 'DELETE',
    })
      .then(() => setMessages([]))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <h1>Chat</h1>
      <div className={styles.chatInner}>
        <ChatBlock chatData={messages} />
        <Comment
          inputValue={inputValue}
          setInputValue={setInputValue}
          changeChat={changeChat}
          setChatData={setMessages}
          deleteChat={deleteChat}
          showDialog={showDialog}
        />
      </div>
    </>
  );
};

export default Chat;
