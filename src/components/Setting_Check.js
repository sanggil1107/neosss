import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { useFetch } from './FetchTeam';
import { useTeamFetch } from './FetchTeamSelect';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

const Setting_Check = (props) => {
  const { open, setOpen } = props;
  const [ teams ] = useFetch();

  const [ selected, setSelected ] = useState();
  const [ id, setId ] = useState();
  const [ myteam ] = useTeamFetch();
  const [ team, setTeam ] = useState();
  
  const user = localStorage.getItem("user");

  useEffect(() => {
    JSON.parse(user).forEach(use => {
      setId(use.USERID);
   //   axios.get(`/api/userlist/teamcode${use.USERID}`);
    })
  },[]);

  // useEffect(() => {
  //   const body = axios.get('/api/userlist/teamcode',{userid: id});
  //   setTeam(body.data);
  // },[id]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    axios.put('/api/team/check_update',{teamcode: selected, id: id});
  }

  const handleChangeCheckbox = (e) => {
    if(e.target.checked) {
      setSelected(e.target.value);
    }
    else {
      setSelected();
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>조근팀 설정{myteam}</DialogTitle>
        <TableContainer >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox />
                </TableCell>
                <TableCell>팀명</TableCell>
                <TableCell>팀코드</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { teams.map((team, i) => (
                <TableRow key={team.CODE}>
                  <TableCell padding="checkbox">
                    <Checkbox value={team.CODE} 
                      onChange={handleChangeCheckbox}
                      checked={selected === team.CODE}
                    />
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {team.CODEDESC}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {team.CODE}
                  </TableCell>
                </TableRow>
              )) }
            </TableBody>
          </Table>
        </TableContainer>
        <DialogActions>
          <Button varient="outlined" color="primary" onClick={handleSubmit}>확인</Button>
          <Button varient="outlined" color="primary" onClick={handleClose}>닫기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Setting_Check;