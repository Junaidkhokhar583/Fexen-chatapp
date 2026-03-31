export default function MessageList({messages}){
    return(
        <div className="border mx-1 p-1 border-amber-500 h-75 overflow-auto">
            {messages.map((msg,index)=>{
                return (
                <div key={index}>{msg}</div>
                )
            })}
        </div>
    )

}