import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ userName }) => {
  const location = useLocation();
  const email = location.state?.email || '';
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (email) {
      Axios.get('https://todo-backend-evn3.onrender.com/tasks', {
        params: { email },
      })
        .then((res) => {
          setTasks(res.data);
        })
        .catch((error) => {
          console.error('Error fetching tasks:', error);
        });
    }
  }, [email]);

  const handleDelete = (id) => {
    Axios.delete(`https://todo-backend-evn3.onrender.com/tasks/${id}`)
      .then(() => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
      })
      .catch((err) => console.error('Delete failed:', err));
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Welcome, {userName}</h2>
      </div>

      <Link to="/addtask" state={{ email: email }}>
        <button className="add-task-btn">Add Task +</button>
      </Link>

      <div className="task-list">
        {tasks.map((task, i) => (
          <div key={i} className="task-card">
            <div className="task-header">
              <p className="task-text">{task.task}</p>
              <button className="delete-btn" onClick={() => handleDelete(task.id)}>
                ✖
              </button>
            </div>
            <div className="date-box">
              {new Date(task.datee).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;