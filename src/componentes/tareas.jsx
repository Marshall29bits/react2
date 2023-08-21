import React from 'react';

function Task({ task, onToggle, onDelete }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={onToggle}
      />
      <span className={task.completed ? 'completed' : ''}>{task.text}</span>
      <button onClick={onDelete}>Eliminar</button>
    </li>
  );
}

export default Task;