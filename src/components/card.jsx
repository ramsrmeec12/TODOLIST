function Card(props)
{
    return(
        <div style={{backgroundColor:props.bgcolor}} className="py-5 px-10 border rounded-md text-center flex-grow"> 
          <h1 className="text-2xl font-medium">{props.h1}</h1>
          <p>{props.p}</p>
        </div>
    )
}
export default Card