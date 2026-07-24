import { useRef, useState } from 'react';
import MessageList from './MessageList';
import styles from './Messenger.module.css';
function Messenger() {
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const handleClick = () => {
    console.log(messages);
    console.log(inputRef.current.value);
    if (!inputRef.current.value) {
      return;
    }
    const text = inputRef.current.value;
    inputRef.current.value = '';
    setMessages((prev) => [
      ...prev,
      { id: new Date().getTime(), text: text.trim() },
    ]);
  };
  return (
    <>
      <h1 className='task'>Задача 1</h1>
      <p className='text'>
        Створити імітатор мессенджера. Є можлиість додавати/відображати
        повідомлення і ставити лайки (додайте стилі на свій розсуд).
      </p>
      <MessageList messages={messages} />
      <div className={styles.sendMassageBlock}>
        <input
          className={styles.input}
          type='text'
          placeholder='Напишіть щось'
          ref={inputRef}
        />

        <button className={styles.sendMassageButton} onClick={handleClick}>
          Send
        </button>
      </div>
    </>
  );
}

export default Messenger;
