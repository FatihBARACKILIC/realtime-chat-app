import ChatForm from "./ChatForm"
import ChatList from "./ChatList"
import { useEffect } from "react"
import { init, subscribeChat, subscribeInitialMessages } from "../socketApi"
import { useChatContext } from "../context/ChatContext"

const Container = () => {
  const { setMessages } = useChatContext()

  useEffect(() => {
    init()

    subscribeInitialMessages((messages) => setMessages(messages))

    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }])
    })
  }, [])

  return (
    <div className="App">
      <ChatList />
      <ChatForm />
    </div>
  )
}

export default Container
