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
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import { useTeamFetch } from './FetchTeamSelect';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Adimn_CheckerInsert = (props) => {
  const { open, setOpen } = props;
  const inputTeamcode  = useTeamFetch();
  const [ inputUserid, setInputUserid ] = useState('');
  const [ inputUsername, setInputUsername ] = useState('');
  const classes = useStyles();
  const [validUserid, setValidUserid] = useState('');

  const handleUseridChange = (e) => {
      setInputUserid(e.target.value);
  };

  const handleUsernameChange = (e) => {
      setInputUsername(e.target.value);
  };

  const handleClose = () => {
    setInputUserid("");
    setValidUserid("");
    setOpen(false);
  };

  const validateUseridYN = async(inputUserid) => {
    if (inputUserid != "") {
      const body = await axios.get(`/api/login/${inputUserid}`);

      console.log(body.data)
      setValidUserid(body.data);
      
      if( validUserid == "" || validUserid == null || validUserid == undefined )
      {
        return null;
      }  
      else
      { 
        return "이미 등록된 ID 입니다.";
      }
    }
  }
  
  const handleSubmit = () => {
    axios.post('/api/admin/userlist/insert',{ userid: inputUserid, username: inputUsername, teamcode: inputTeamcode });
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="md"> 
        <DialogTitle>조근자 신규 등록</DialogTitle>
        <form className={classes.root} noValidate autoComplete="off">
          <TableContainer >
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>조근자ID</TableCell>
                  <TableCell>
                    <FormControl>
                      <Input required
                        id="inputUserid"
                        value={ inputUserid }
                        onChange={ handleUseridChange }
                        aria-describedby="component-error-text"
                        helpertext={
                            validateUseridYN(inputUserid)
                        } // 에러일 경우에만 안내 문구 표시
                      />
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>조근자명</TableCell>
                  <TableCell>
                    <FormControl>
                      <Input id="component-simple" value={ inputUsername } onChange={ handleUsernameChange } required/>
                    </FormControl>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </form>
        <DialogActions>
          { inputTeamcode }, { inputUserid }, { inputUsername }
          <Button varient="outlined" color="primary" onClick={ handleSubmit }>확인</Button>
          <Button varient="outlined" color="primary" onClick={ handleClose }>닫기</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Adimn_CheckerInsert;