import { useState } from "react"
import Todoitem from "./Todoitem"

function TodoList(props) {

    const activityArr = props.activityArr
    const setactivityArr = props.setactivityArr


    return (
        <div className="bg-violet-300 flex-grow p-3 border rounded mt-2">
            <h1 className="text-3xl font-medium">Today's Activity</h1>
            {activityArr.length===0?"You haven't added anything":"You have pending works"}
            {
                activityArr.map(function(item,index)
            {
                return <Todoitem id={item.id} index={index} activity={item.activity} activityArr = {activityArr} setactivityArr={setactivityArr}></Todoitem>
            })
            }
        </div>
    )
}

export default TodoList