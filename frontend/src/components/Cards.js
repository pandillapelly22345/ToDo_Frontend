import React from 'react';
import './Cards.css';

const Cards = ({ tasks, onDelete }) => {
  const { task, date, _id } = tasks;

  return (
    <div className="card-container">
      <div className="card-task">
        <p className="task-text">{task}</p>
        <button className="delete-btn" onClick={() => onDelete(_id)}>✖</button>
      </div>

      <div className="date-box">
        <p>{new Date(date).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default Cards;