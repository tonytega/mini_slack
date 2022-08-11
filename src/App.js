import  React from 'react'
import {people as initialPeople,channels as initialChannels} from './channels_staticdata'
import Main from './Main'
import ChannelMessage from "./channelMessage"
import PeopleMessage from './PeopleMessage'
import {useState} from 'react'

// const stateChanger = (state,action)=>{
//     if action.type = 
// }

function App(){
     
    const [channels,setChannels] = useState(initialChannels);
    const [people,setPeople] = useState(initialPeople);
    const [channelOrPeople,setChannelOrPeople] = useState(true);
    const [inputValue,setInputValue] = useState('Type your message here. Press enter to send');
    // const [number,setNumber] = useState(0);
    const [channel,setChannel] = useState(channels[0]);
    const [person, setPerson] = useState(people[0]);
    // this fuction decides if the information shown belongs to a channel
    const channelRenderNo = (channel)=>{
            if (channels.indexOf(channel) >= 0){
                setChannelOrPeople(true);
                setChannel(channel); 
            } 
        }
    // this fuction decides if the information shown belongs to a person

    const personRenderNo = (person)=>{
            if (people.indexOf(person) >= 0){
                setChannelOrPeople(false);
                setPerson(person); 
            }
        }
    
    // this function is triggered when the user presses the enter button 
    // in an input field it also create a message object in channels or people static data
    // the channel argument can also be a person argument
    const onHandleKeyPress=(event,channelOrPeopleArgument)=>{
        
        if(event.key=== 'Enter'){
           const inputValue = event.target.value;
            let messageObject = {
                sender : 'Myself',
                date : "2016-07-30 21:24:37",
                the_message : inputValue,
                id : channelOrPeopleArgument.message.length,
            }
            setInputValue(inputValue);
            // let newChannelOrPeople = 
            let newChannelOrPeopleArgument = channelOrPeopleArgument.message.push(messageObject)
            if (channels.indexOf(channelOrPeopleArgument)){
                setChannel(newChannelOrPeopleArgument)
            }else{
                setPerson(newChannelOrPeopleArgument)
            }
        }              
    
    }
   

  
    //  the return statement renders the main component and it also 
    // renders conditionally renders channelmessage or peoplemessage as children depending on the result of
    //  this.state.render_no,   0 === channelmessage else render people message 

    return (
        <Main channels={channels} people={people} channelRenderNo={channelRenderNo} personRenderNo={personRenderNo}>
                    {channelOrPeople ? <ChannelMessage channel={channel} inputValue={inputValue} 
                                onHandleKeyPress={onHandleKeyPress}/> : <PeopleMessage person={person} 
                                inputValue={inputValue} onHandleKeyPress={onHandleKeyPress}/>}
                </Main>
    )

    
}

export default App;