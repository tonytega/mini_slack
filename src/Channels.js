


const Channels = ({channel,channelRenderNo})=>(
        <p><button onClick={()=>{channelRenderNo(channel)}}>
           # {channel.channel_name}
           
        </button></p>
)

export default Channels;