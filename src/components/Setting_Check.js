import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useFetch } from './Data';

const Setting_Check = (props) => {
  const { open, setOpen } = props;
  const [ newAddFormState ] = useFetch();

  const handleclose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleclose} maxWidth="md">
      <DialogTitle>알림팀 설정({newAddFormState})</DialogTitle>
          <DialogContent>
            <TextField label="이름" type="text" name="userName" ></TextField><br/>
            <TextField label="생년월일" type="text" name="birthday" ></TextField><br/>
            <TextField label="성별" type="text"name="gender" ></TextField><br/>
            <TextField label="직업" type="text"name="job" ></TextField><br/>
          </DialogContent>
          <DialogActions>
            <Button varient="contained" color="primary" >추가</Button>
            <Button varient="outlined" color="primary" onClick={handleclose}>닫기</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
};

export default Setting_Check;