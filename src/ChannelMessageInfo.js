import './ChannelMessageinfo.css'


const ChannelMessageInfo=({message})=>(
    
        <div className="channel-message-info">
                <div className="message-image"></div>
            <h4 className="message-sender">
                {message.sender} 
                <span className="message-date">{message.date}</span>
            </h4>

            
            <p className="message-message">{message.the_message}</p>
        </div>
        
    
)

export default ChannelMessageInfo;