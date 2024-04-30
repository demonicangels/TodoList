import React, { createContext, useState, useContext } from 'react';
import { cloneDeep } from 'lodash';
import del from 'lodash';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    
    const addTask = (task) => {
        const updatedTasks = cloneDeep(tasks);
        updatedTasks.push(task);
        setTasks(updatedTasks);
    };

    const deleteTasks = (tasksToDelete) => {
        const updatedTasks = del.filter(tasks, (task,index) => !tasksToDelete.includes(index));
        setTasks(updatedTasks)
    }

    const updateTask = (index, newText) => {
        const updatedTasks = [...tasks];
        updatedTasks[index] = newText;
        setTasks(updatedTasks);
    };

    return (
        <TodoContext.Provider value={{ tasks, addTask, deleteTasks, updateTask }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodo = () => useContext(TodoContext);