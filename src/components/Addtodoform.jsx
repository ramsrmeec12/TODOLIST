import { act, useState } from "react"

function Addtodoform(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr

    const [newactivity,setnewactivity] = useState("")

    function handleChange(evt) {

        setnewactivity(evt.target.value)

    }

    function addActivity()
    {
        setactivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setnewactivity("")
    }

    return(<div>
        <h1 className="text-2xl font-medium">Manage Activities</h1>
        <div>
            <input value={newactivity} onChange={handleChange} className="border border-black mt-2 bg-transparent" placeholder="Enter your Activity?"></input>
            <button onClick={addActivity} className="bg-black text-white mt-2 border border-black px-1">Add</button>
        </div>
    </div>)
}

export default Addtodoform