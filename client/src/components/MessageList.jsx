export default function MessageList({messages=[]}){
    return(
        <div className="border border-amber-500 h-75 overflow-auto">
            {messages.map((msg,index)=>{
                return (
                <div key={index}>{msg}</div>
                )
            })}
        </div>
    )

}