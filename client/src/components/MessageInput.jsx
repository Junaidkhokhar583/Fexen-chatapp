import { useState} from "react";

export default function MessageInput({sendMessage}){
const [input,setInput]=useState("");

const handleSend=()=>{
    if(!input) return;
    sendMessage(input);
    setInput("");
}
return(

    <div>
        <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        placeholder="type your message..."
        />
        <button onClick={handleSend}>Send</button>
    </div>
)

}