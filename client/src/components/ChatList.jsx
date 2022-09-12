import ScrollableFeed from "react-scrollable-feed"
import { useChatContext } from "../context/ChatContext"
import ChatItem from "./ChatItem"
import styles from "./styles.module.css"

const ChatList = () => {
  const { messages } = useChatContext()
  return (
    <div className={styles.chatlist}>
      <ScrollableFeed forceScroll={true}>
        {messages.map((item, key) => (
          <ChatItem key={key} item={item} />
        ))}
      </ScrollableFeed>
    </div>
  )
}

export default ChatList
