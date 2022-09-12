import { useState } from "react"
import { useChatContext } from "../context/ChatContext"
import { sendMessage } from "../socketApi"
import styles from "./styles.module.css"

const ChatForm = () => {
  const [message, setMessage] = useState("")
  const { setMessages } = useChatContext()

  const handleSubmit = (e) => {
    e.preventDefault()

    setMessages((prevState) => [...prevState, { message, fromMe: true }])
    sendMessage(message)
    setMessage("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.textInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  )
}

export default ChatForm
