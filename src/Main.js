import Channels from "./Channels"
import People from './People.js'
import './main.css'

// the main component renders a list of channels and people
// it also renders channelmessage and people message as children
const Main = ({channels,people,children,channelRenderNo,personRenderNo})=>(
    <div className="container">
        <aside className="channels_and_people">
            <div className="channels_information">
                <h2>Channels</h2>
                {channels.map((channel)=>(
                                <Channels channel = {channel} key={channel.id} channelRenderNo={channelRenderNo}
                                             />))}
            </div>
            
            <div className="people_information">
                <h2>People</h2>
                {people.map((person)=>(<People key={person.id} person={person} personRenderNo={personRenderNo}
                                         />))}
            </div>
        </aside>
        <div className="messages">
            {children}
        </div>

    </div>
)
export default Main;