function Todoitem(props)
{

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    function handleDelete(deleteid)
    {
        var temparray= activityArr.filter(function(item)
    {
        if(item.id===deleteid){
            console.log(item.id)
            return false
        }
        else
        {
            return true
        }

       
    })
    setactivityArr(temparray)
    }

    return (
        (<div className="flex justify-between">
            <p>{props.index+1}. {props.activity}</p>
            <button onClick={()=>handleDelete(props.id)} className="text-red-600">Delete</button>
        </div>)

    )
}

export default Todoitem