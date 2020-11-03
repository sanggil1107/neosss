import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useFetch } from './FetchTeam';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Checkbox } from '@material-ui/core';


const Setting_Check = (props) => {
  const { open, setOpen } = props;
  const [ teams ] = useFetch();
  const [ selected, setSelected ] = useState([]);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {

  }

  const handleChangeCheckbox = (e) => {
    if(e.target.checked) {
      setSelected([...selected, e.target.value]);
    }
    else {
      setSelected(selected => selected.filter(isselected => isselected != e.target.value ))
    }
  }

  const handleChangeAllCheckbox = (e) => {
    if(e.target.checked) {
      setSelected([]);
      const allselected = teams.map(team => team.teamname);
      setSelected(allselected)
    }
    else {
      setSelected([]);
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
      <DialogTitle>알림팀 설정</DialogTitle>
          <TableContainer >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox onChange={handleChangeAllCheckbox}
                      checked={selected.length === teams.length}
                    />
                  </TableCell>
                  <TableCell>팀명</TableCell>
                  <TableCell>팀코드</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { teams.map((team, i) => (
                  <TableRow key={team.teamname}>
                    <TableCell padding="checkbox">
                      <Checkbox value={team.teamname} 
                        onChange={handleChangeCheckbox}
                        checked={selected.includes(team.teamname)}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {team.teamname}
                    </TableCell>
                    <TableCell>팀코드</TableCell>
                  </TableRow>
                )) }
              </TableBody>
            </Table>
          </TableContainer>
        <DialogActions>

          {selected}
          <Button varient="outlined" color="primary" onClick={handleSubmit}>확인</Button>
          <Button varient="outlined" color="primary" onClick={handleClose}>닫기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Setting_Check;