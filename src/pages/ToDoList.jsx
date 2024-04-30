import React, { useState } from 'react';
import { useTodo } from '../TodoProvider';
import '../css/todolist.css';

const Todo = () => {
    const { tasks, addTask, deleteTasks, updateTask } = useTodo();
    const [task, setTask] = useState('');
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [newText, setNewText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask(''); 
        }
    };

    const handleDelete = () => {
        deleteTasks(selectedTasks)

        setSelectedTasks([])
    }

    const handleEditClick = (index) => {
        setEditingTask(index);
        setNewText(tasks[index]); 
    };

    const handleTaskSelect = (index) =>{
        
        setSelectedTasks((prevTasks) => {
            const newSelectedTasks = [...prevTasks]

            if(newSelectedTasks.includes(index)){
                newSelectedTasks.slice(newSelectedTasks.indexOf(index), 1)
            }
            else{
                newSelectedTasks.push(index)
            }
            return newSelectedTasks;
        })
    }

    const handleInputChange = (e) => {
        setNewText(e.target.value);
    };

    const handleSaveClick = (index) => {
        
        updateTask(index, newText);
        setEditingTask(null);
        setNewText('');
    };
    
    return (
        <div className="list">
            <h1>Todo list</h1>

            <div className="formElements">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="task">Task:</label>
                    <input
                        type="text"
                        id="task"
                        placeholder="Enter task/item..."
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>

            <ul className="tasktext">
                {tasks.map((task, index) => (
                    <li key={index}>
                        {editingTask === index ? (
                            <>
                                <input
                                    type="text"
                                    value={newText}
                                    onChange={handleInputChange}
                                />
                                <button className='save' onClick={() => handleSaveClick(index)}>Save</button>
                            </>
                        ) : (
                            <>
                                <input
                                    type="checkbox"
                                    id={`task-${index}`}
                                    name={`task-${index}`}
                                    checked={selectedTasks.includes(index)}
                                    onChange={() => handleTaskSelect(index)}
                                />
                                <label htmlFor={`task-${index}`}>{task}</label> 
                                <button className='edit' onClick={() => handleEditClick(index)}>Edit</button>
                            </>
                        )}
                    </li>
                ))}
                <button className="delete" onClick={handleDelete}>Delete</button> 
            </ul>
        </div>
    );
};

export default Todo;