import ChannelMessageInfo from "./ChannelMessageInfo";
import './ChannelMessage.css'

const PeopleMessage = ({person,inputValue,onHandleKeyPress})=>(
    <div className="channel-message"> 
       <div className="all-message">
            {person.message.map((message)=>(<ChannelMessageInfo key={message.id} message={message}/>))}
        </div>
        <div className="input-container">
            
            <input className="channel-message-input" defaultValue={inputValue} 
                        onKeyUp={(event)=>{onHandleKeyPress(event,person);}} type='text'/>
            
        </div>
    </div>
)

export default PeopleMessage;