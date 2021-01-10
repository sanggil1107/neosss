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

const Setting_Alarm = (props) => {
  const { open, setOpen } = props;
  const [ teams ] = useFetch();
  const [ selected, setSelected ] = useState([]);
  const [ id, setId ] = useState();
  //const [ myteam ] = useTeamFetch();
  const [ myteam, setMyteam ] = useState([]);
  
  const user = localStorage.getItem("user");

  useEffect(() => {
    JSON.parse(user).forEach(use => {
      setUserTeamcode(use.USERID);
      setId(use.USERID);
    })
  },[]);

  
  useEffect(() => {
    if(open) {
      setSelected([]);
    }
  },[open]);

  const setUserTeamcode = async(id) => {
    console.log(id)
    console.log(selected)
    setMyteam(myteam => []);
    const datas = await axios.get(`/api/userlist/alarmteamcode${id}`)
      .then(response => response.data);
    console.log(datas);
    datas.map(data => (
      console.log("myteam=" + myteam),
      console.log(data.TEAMCODE),
      setMyteam(myteam => [...myteam, data.TEAMCODE])
    ))
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    selected.map(select => (
      axios.put('/api/team/alarm_update', {teamcode: select, id: id})
    ));
    setOpen(false);
  }

  const handleChangeCheckbox = (e) => {
    if(e.target.checked) {
      console.log("checked");
      setSelected([...selected, e.target.value]);
    }
    else {
      setSelected(selected => selected.filter(isselected => isselected != e.target.value ))
    }
  }

  const handleChangeAllCheckbox = (e) => {
    if(e.target.checked) {
      setSelected([]);
      const allselected = teams.map(team => team.CODE);
      setSelected(allselected)
    }
    else {
      setSelected([]);
    }
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogTitle>알림팀 설정 </DialogTitle>
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
                <TableRow key={team.CODE}>
                  <TableCell padding="checkbox">
                    <Checkbox value={team.CODE} 
                      onChange={handleChangeCheckbox}
                      //checked={selected.length!=0 ? selected.includes(team.CODE) : myteam.includes(team.CODE)}
                      checked={selected.includes(team.CODE) ? true : false}
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

export default Setting_Alarm;