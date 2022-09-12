import io from "socket.io-client"

let socket

const init = () => {
  console.log("Connecting...")

  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  })

  socket.on("connect", () => console.log("Connected!"))
}

const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message)
}

const subscribeChat = (cb) => {
  if (!socket) return

  socket.on("receive-message", (message) => {
    cb(message)
    // console.log("New Message: ", message)
  })
}

const subscribeInitialMessages = (cb) => {
  if (!socket) return

  socket.on("message-list", (messages) => {
    cb(messages)
  })
}

export { init, sendMessage, subscribeChat, subscribeInitialMessages }
