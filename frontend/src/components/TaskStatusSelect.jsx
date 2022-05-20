import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { request } from '../service/request';

export default function TaskStatusSelect({ task, getTasks }) {
  const [newStatus, setNewStatus] = React.useState(task.status);

  useEffect(() => {
    updateStausTask();
  }, [newStatus]);

  const updateStausTask = async () => {
    const endpoint = `/todo/${task._id}`;
    await request(endpoint, { status: newStatus }, 'put');
    getTasks(); //faz uma nova requisição no DB
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          id="demo-simple-select"
          defaultValue={task.status}
          labelId="demo-simple-select-label"
          label="Status"
          onChange={(e) => setNewStatus(e.target.value)}
          value={newStatus}
        >
          <MenuItem value={'Pendente'}>Pendente</MenuItem>
          <MenuItem value={'Em Andamento'}>Em Andamento</MenuItem>
          <MenuItem value={'Pronto'}>Pronto</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

TaskStatusSelect.propTypes = {
  task: PropTypes.object.isRequired,
  updateStatus: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
};
