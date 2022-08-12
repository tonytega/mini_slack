import ChannelMessageInfo from "./ChannelMessageInfo";
import './ChannelMessage.css'

// channel 
const ChannelMessage = ({channel,inputValue,onHandleKeyPress,onMenuClick,showMenu})=>(
    <div className="channel-message" > 
        <div className='menu_bar' onClick={onMenuClick}>
            <i className="fa-solid fa-bars"></i>
            
        </div>
       <div className="all-message">
            {channel.message.map((message)=>(<ChannelMessageInfo key={message.id} message={message}/>))}
        </div>
        <div className="input-container">
            
            <input className="channel-message-input" placeholder={inputValue} 
            style={showMenu === false ? {left:'32%'}: {'left':'10px'}}
                        onKeyUp={(event)=>{onHandleKeyPress(event,channel);}} type='text'/>
            
        </div>
    </div>
)

export default ChannelMessage;