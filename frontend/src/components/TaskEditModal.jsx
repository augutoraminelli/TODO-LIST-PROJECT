import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { DialogTitle, TextField } from '@mui/material';
import { request } from '../service/request';

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props,ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function TaskEditModal({ openModal, handleModal, task, getTasks }) {
    const [updatedText, setUpdatedText] = React.useState(task.text);

    const updateTask = async (task) => {
      const endpoint = `/todo/${task._id}`;
      await request(endpoint, { content: updatedText }, 'put');
      handleModal();
      getTasks(); //faz uma nova requisição no DB
    };

  return (
    <div>
      <Dialog
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        keepMounted
        onClose={handleModal}
        open={openModal}
        TransitionComponent={Transition}
      >
        <DialogContent>
          <DialogTitle>EDIT TASK</DialogTitle>
          <TextField
            defaultValue={updatedText}
            fullWidth
            onChange={(e) => setUpdatedText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={ () => handleModal() }
          >
            Cancel
          </Button>
          <Button
            onClick={ () => updateTask(task) }
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

TaskEditModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  task: PropTypes.object.isRequired,
  updateTask: PropTypes.func.isRequired,
  getTasks: PropTypes.func.isRequired
};
