import * as React from 'react';
import PropTypes from 'prop-types';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Paper } from '@mui/material';
import TaskEditModal from './TaskEditModal';
import TaskStatusSelect from './TaskStatusSelect';
import { request } from '../service/request';

export default function TaskItem({ task, getTasks, updateTask, updateStatus }) {
  const [openModal, setOpenModal] = React.useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const deleteTask = async (task) => {
    const endpoint = `/todo/${task._id}`;
    await request(endpoint, {}, 'delete');
    getTasks(); //faz uma nova requisição no DB
  };

  return (
    <>
      <TaskEditModal
        handleModal={handleModal}
        openModal={openModal}
        task={task}
        updateTask={updateTask}
        getTasks={getTasks}
      />
        <Paper style={{ padding: "0.5em"}}>
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <EditIcon
                data-testid="edit-task"
                name="edit"
                onClick={ () => handleModal() }
                />
                <DeleteIcon
                  name="delete"
                  onClick={() => deleteTask(task)}
                />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <TaskStatusSelect
                  task={task}
                  updateStatus={updateStatus}
                />
              </ListItemIcon>
              <ListItemText 
                primary={task.content}
                onClick={() => handleModal()}
              />
            </ListItemButton>
          </ListItem>
        </Paper>
      </>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  updateStatus: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired,
};
