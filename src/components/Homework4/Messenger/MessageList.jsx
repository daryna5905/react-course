import Message from './Message';
import styles from './Messenger.module.css';

function MessageList({ messages }) {
  return (
    <div className={styles.list}>
      {messages.map((item) => (
        <Message message={item.text} key={item.id} />
      ))}
    </div>
  );
}

export default MessageList;
