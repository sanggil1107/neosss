import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useFetch } from './FetchTeam';

const Setting_Check = (props) => {
  const { open, setOpen } = props;
  const [ teams ] = useFetch();

  // useEffect(
  //   () => {
  //     setTeam();
  //   }, []
  // );
  // const setTeam = async() => {
  //   const body = await axios.get('/api/teamlist');
  //   console.log("teamlist");
  //   setTeams(body.data);
  // }
  const handleclose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleclose} maxWidth="md">
      <DialogTitle>알림팀 설정</DialogTitle>
          <DialogContent>
            { teams.map((team, i) => (
              <p>{team.teamname}</p>
            )) }
          </DialogContent>
          <DialogActions>
            <Button varient="contained" color="primary" >확인</Button>
            <Button varient="outlined" color="primary" onClick={handleclose}>닫기</Button>
          </DialogActions>
      </Dialog>
    </div>
  );
};

export default Setting_Check;