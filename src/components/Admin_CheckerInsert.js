import React, { useEffect, useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { useFetch } from './FetchAdminUserList';
import axios from 'axios';

const Setting_Alarm = (props) => {
  const { open, setOpen } = props;
  const [ teams ] = useFetch();
  const [ selected, setSelected ] = useState([]);
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeCheckbox = () => {

  }
  
  const handleSubmit = () => {

  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>조근자 신규 등록</DialogTitle>
        <TableContainer >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>조근자명</TableCell>
                <TableCell>조근자ID</TableCell>
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

export default Setting_Alarm;