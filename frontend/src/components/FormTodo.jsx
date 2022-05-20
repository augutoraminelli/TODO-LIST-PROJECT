import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Paper, Button } from '@mui/material';
import { request } from '../service/request';

export default function FormTodo({ setTasks }) {
  const [text, setText] = useState(null);
  // const [newTask] = useState('');
 
  const createTask = async (text) => {
      const endpoint = '/todo';
      const response = await request(endpoint, { content: text }, 'post');

      if (!response.error) {
        console.log(response.error);
        setTasks(prevTaks => [...prevTaks, response].sort(  (a, b) => b.content - a.content));
      }
  };

  return (
    <Paper style={{ padding:"1em" }}>
      <div style={{ display: "flex", justifyContent: "center" }} >
        <TextField 
          id="outlined-basic"
          data-testid="input-task"
          label="task"
          variant="outlined"
          onChange={(e) => setText(e.target.value)}
          fullWidth
        />
        <Button 
          variant="text"
          onClick={() => createTask(text)}
          value={text}
        >
          TASK
        </Button>
      </div>
    </Paper>
  )
}

FormTodo.propTypes = {
  addTask: PropTypes.func.isRequired,
  setTasks: PropTypes.func.isRequired,
}
