import { useRef,useEffect } from "react";

export default function useWebSocket(onMessage){
    const socketRef=useRef(null);

    useEffect(() => {
      socketRef.current=new WebSocket("ws://localhost:3000");

        socketRef.current.onopen=()=>{
            console.log("Connected to server!")
        }
      
      socketRef.current.onmessage=(event)=>{
        onMessage(event.data)
      }

      socketRef.current.onerror=(err)=>{
        console.error("websocket error : ",err)
      }

      socketRef.current.onclose=()=>{
        console.log("Server Disconnected!")
      }
    
      return () => {
        socketRef.current.close()
      }
    }, [onMessage])
    
    const sendMessage=(msg)=>{
        if(socketRef.current.readyState===WebSocket.OPEN){
            socketRef.current.send(msg);
        }
    }
    return {sendMessage}
}