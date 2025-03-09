import Addtodoform from "./Addtodoform"
import TodoList from "./Todolist"
import { useState } from "react"

function TodoContainer()
{

  const [activityArr, setactivityArr] = useState([
    {
        id:1,
        activity:"Go for  Walk"
    },
    {
        id:2,
        activity:"Wake up Early"
    },
    {
        id:3,
        activity:"Eat in morning"
    }
])
    return(
        <div className="flex gap-5 flex-wrap">
          <Addtodoform activityArr={activityArr} setactivityArr={setactivityArr}></Addtodoform>
          <TodoList activityArr={activityArr} setactivityArr={setactivityArr}></TodoList>
        </div>
    )
}
export default TodoContainer