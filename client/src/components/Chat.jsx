import { useState } from "react"
import MessageInput from "./MessageInput"
import MessageList from "./MessageList"
import useWebSocket from "../hooks/useWebSocket"

export default function Chat(){
    const [messages, setMessages] = useState([])

    const handleMessage = (msg) => {
        setMessages((prev) => [...prev, msg])
    }

    const { sendMessage } = useWebSocket(handleMessage);

    return (
        <div>
            <MessageList messages={messages}/>  
            <MessageInput sendMessage={sendMessage}/>
        </div>
    )
}