import styles from "./styles.module.css"

const ChatItem = ({ item }) => {
  return (
    <div className={`${styles.chatItem} ${item.fromMe ? styles.right : ""}`}>
      {item.message}
    </div>
  )
}

export default ChatItem
