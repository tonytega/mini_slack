import ChannelMessageInfo from "./ChannelMessageInfo";
import './ChannelMessage.css'

// channel 
const ChannelMessage = ({channel,inputValue,onHandleKeyPress})=>(
    <div className="channel-message"> 
       <div className="all-message">
            {channel.message.map((message)=>(<ChannelMessageInfo key={message.id} message={message}/>))}
        </div>
        <div className="input-container">
            
            <input className="channel-message-input" placeholder={inputValue} 
                        onKeyUp={(event)=>{onHandleKeyPress(event,channel);}} type='text'/>
            
        </div>
    </div>
)

export default ChannelMessage;