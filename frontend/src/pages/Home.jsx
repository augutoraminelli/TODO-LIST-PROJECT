import React, { useState, useEffect } from 'react'
import FormTodo from '../components/FormTodo'
import TaskItem from '../components/TaskItem'
import { Container, List } from '@mui/material'
import { request } from '../service/request';
import '../App.css';

function Home() {
  const [tasks, setTasks] = useState([]);

  const updateStatus = (id, newStatus) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, status: newStatus } : task)));
  }

  const getTasks = async () => {
    const endpoint = '/todo';
    const response = await request(endpoint, {}, 'get')
    console.log(response);
    setTasks(response);
  }

  useEffect(() => {
    getTasks();
  }, []);
  

  return (
      < Container maxWidth="xs" style={{ marginTop:"1em" }}>
        <h1 className='title-todo'>TODO LIST!</h1>
        <FormTodo setTasks={setTasks} />
          <List sx={{ marginTop:"1em" }}>
            {
              tasks && tasks.map((task, i) => (
              <div key={ i } style={{ marginTop: "1em" }}>
                <TaskItem
                  task={task}
                  getTasks={getTasks}
                  updateStatus={updateStatus}
                />
              </div>
              ))
            }
          </List>
      </Container>
  )
}

export default Home
