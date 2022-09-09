import { createContext, useContext, useState } from "react"

const ChatContext = createContext()

const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState()

  const values = {
    messages,
    setMessages,
  }

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}

const useChatContext = () => useContext(ChatContext)

export default ChatContext
export { ChatProvider, useChatContext }
