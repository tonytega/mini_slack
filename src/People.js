import './people.css'

const People = ({person,personRenderNo})=>(
    <p className='button-paragraph'>
        <button  onClick={()=>{personRenderNo(person)}}>
            {person.name}
        </button>
    </p>
)

export default People;