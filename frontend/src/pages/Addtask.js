import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import './Addtask.css';


const Addtask = () => {
  const location = useLocation();
    const email = location.state?.email || '';
  

  const [newTask, setNewTask] = useState({
    task: "", date: ""
  })

  function changeHandler(event){
    console.log(email);
    setNewTask((prev) => {
      return{
        ...prev, [event.target.name]: event.target.value
      } 
    })
  }

  const navigate = useNavigate();

  function addTheTask(event){
    event.preventDefault();
    const {task, date} = newTask;
    Axios.post("https://todo-backend-evn3.onrender.com/addtask", {
      task: task,
      date: date,
      email: email,
    })
    .then((response) => {
      if(response.data.success){
        toast.success("New task added Successfully!");
        navigate('/dashboard', { state: { email: email } });
      }
      else{
        toast.error("Error Occured Try again:(")
      }
    })
    .catch(err=> {
      console.log(err);
      toast.error("ERROR!!!")
    })
  }


  return (
    <div className="addtask-container">
      
      <div className="addtask-box">
        <h2>Hello, {email}</h2>
        <form onSubmit={addTheTask}>
          <h2>
            Add Task
          </h2>
          <div>
            <label>Task</label>
            <input 
            required
            name='task'
            type='text' 
            placeholder='Enter Task'
            value={newTask.task}
            onChange={changeHandler}
            />
          </div>

          <div>
            <label>Date</label>
            <input 
            required
            name = 'date'
            type='date' 
            placeholder='Enter Date'
            value={newTask.date}
            onChange={changeHandler}
            
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Addtask