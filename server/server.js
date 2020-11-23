const express = require('express');
const app = express();
const sql = require('mssql');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const fs = require('fs');
// const cors = require('cors')

//const api = require('./routes/index');
const port =process.env.PORT || 3001;
const config = {
  user: 'neoss',
  password: 'new1234!',
  server: 'neoss.database.windows.net',
  database: 'NeOSS',
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

// local mssql용-김민지
const kmjsql = {
  user: 'kmj',
  password: 'new1234!1',
  server: 'localhost',
  port: 1433,
  database: 'NEOSSWORK',
  options: {
    encrypt: true,
    enableArithAbort: true
  }
}

// local mysql용 
const data = {
  "host": "127.0.0.1",
  "user": "root",
  "password": "1qaz2wsx",
  "port": 3306,
  "database": "management"
}

const connection = mysql.createConnection({
  host: data.host,
  user: data.user,
  password: data.password,
  port: data.port,
  database: data.database,
  dateStrings: 'date'
});
//mssql 연결 시 아래 한 줄 주석 필요(comment.김민지)
//connection.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
// app.use('/api', (req, res)=> res.json({username:'bryan'}));
//app.use('/', api)
app.get('/api', (req, res) => {
  res.send({username:'home'});
})

app.get('/hi', (req, res) => {
  res.send({username: 'hello react!'});
})

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// app.get('/api/login/:userid', (req, res) => {
//   const id = req.params.userid;
//   //const title = req.params.newtitle;
//   const sqlSelect = "SELECT USERID FROM USER where userid = ?";
//   connection.query(sqlSelect, id, (err, result) => {
//     res.send(result);
//     console.log(result);
//   })
// });

// 조근/알림팀 목록 조회
// app.get('/api/team/list', (req, res) => {
//   const sqlSelect = "SELECT teamname, teamcode FROM team";
//   connection.query(sqlSelect, (err, result, fields) => {
//       res.send(result);
//       console.log(result);
//     }
//   );
// });

// 수행팀 설정
// app.put('/api/team/check_update', (req, res) => {
//   const title = req.body.title;
//   const sqlUpdate = "UPDATE test set title = ? WHERE title = '양상길'";
//   connection.query(sqlUpdate, title, (err, result) => {
//     if (err) console.log(err);
//   })
// });

// 알림팀 설정
app.put('/api/team/alarm_update', (req, res) => {
  const title = req.body.title;
  const sqlUpdate = "UPDATE test set title = ? WHERE title = '양상길'";
  connection.query(sqlUpdate, title, (err, result) => {
    if (err) console.log(err);
  })
});

// 조근자 목록 조회
app.get('/api/list', (req, res) => {
  const sqlSelect = "SELECT title, curDate FROM test";
  connection.query(sqlSelect, (err, result, fields) => {
      res.send(result);
      console.log(result);
    }
  );
});

// 조근 등록
app.post('/api/insert', (req, res) => {
  const title = req.body.newtitle;
  console.log(title);
});

// 조근 수정
app.put('/api/update', (req, res) => {
  const title = req.body.title;
  //const title = req.params.newtitle;
  const sqlUpdate = "UPDATE test set title = ? WHERE title = '양상길'";
  connection.query(sqlUpdate, title, (err, result) => {
    if (err) console.log(err);
  })
});

// 조근 삭제
app.delete('/api/delete/:title', (req, res) => {
  const title = req.params.title
  const sqlDelete = "DELETE FROM test where title = ?";
  connection.query(sqlDelete, title, (err, result) => {
    if (err) console.log(err);
  })
});


sql.connect(config).then(pool => {
  // 수행팀 설정
  // app.put('/api/team/check_update', (req, res) => {
  //   const team = req.body.team;
  //   const id = req.body.id;
  //   const sqlUpdate = "UPDATE test set title = ? WHERE title = '양상길'";
  //   connection.query(sqlUpdate, title, (err, result) => {
  //     if (err) console.log(err);
  //   })
  // });

  app.put('/api/team/check_update', (req, res) => {
    try {
      return pool.request()
        .input('CODE', sql.VarChar(20), req.body.teamcode)
        .input('USERID', sql.VarChar(50), req.body.id)
        .query('UPDATE TB_USER SET TEAMCODE = @CODE WHERE USERID = @USERID')
        .then(result => {
          console.log("success");
        })
    } catch (err) {
      res.json({
        "error": true,
        "message": "Error executing query"
      })
    }
  });
  // 조근/알림팀 목록 조회
  app.get('/api/team/list', (req, res) => {
    try {
      return pool.request()
        .query('SELECT CODEDESC, CODE FROM TB_CODE')
        .then(result => {
          res.json(result.recordset);
          console.log(result.recordset);
        });
    } catch (err) {
      res.json({
        "error": true,
        "message": "Error executing query"
      })
    }
  });

  // Login
  app.get('/api/login/:userid', function(req, res){
    try{
      return pool.request()
        .input('USERID', sql.VarChar(50), req.params.userid)
        .query('SELECT USERID FROM TB_USER WHERE USERID = @USERID')
        .then(result => {
<<<<<<< HEAD
          res.send(result.recordset);
=======
          res.json(result.recordset);
>>>>>>> master
          console.log(result.recordset);
        });
    } catch (err) {
      res.json({
        "error": true,
        "message": "Error executing query"
      })
    }
  });

  app.get('/api/userlist/teamcode:userid', (req, res) => {
    try{
      return pool.request()
        .input('USERID', sql.VarChar(50), req.params.userid)
        .query('SELECT TEAMCODE FROM TB_USER WHERE USERID = @USERID')
        .then(result => {
          res.json(result.recordset);
          console.log(result.recordset)
        });
    } catch (err) {
      res.json({
        "error": true,
        "message": "Error executing query"
      })
    }
  });
  
  // ADMIN - 조근 대상자 입력 시 teamcode 조회
  app.get('/api/admin/userlist/teamcode', function(req, res){
    try{
      return pool.request()
        .input('USERID', sql.VarChar(50), req.body.userid)
        .query('SELECT TEAMCODE FROM TB_USER WHERE USERID = @USERID')
        .then(result => {
          res.json(result.recordset);
          res.end();
        });
    } catch (err) {
      res.json({
        "error": true,
        "message": "Error executing query"
      })
    }
  });
  
  // ADMIN - 조근 대상자 조회
  app.get('/api/admin/userlist', function(req, res){
    try{
      return pool.request()
        .input('USERID', sql.VarChar(50), 'mink93')
        .execute('UP_USERLIST_SELECT', function(err, result) {
          res.json(result.recordset);
          console.log(result);
          res.end();
       });
    } catch (err) {
      res.json({
        "error": true,
        "message": "Error executing query"
      })
    }
  });

  // ADMIN - 조근 대상자 등록
  app.post('/api/admin/userlist/insert', function(req, res){
    try{
      return pool.request()
        .input('USERID', sql.VarChar(50), req.body.inputUserid)
        .input('USERNAME', sql.VarChar(50), req.body.inputUsername)
        .input('TEAMCODE', sql.VarChar(20), req.body.inputTeamcode)
        .execute('UP_USERLIST_INSERT', function(err, result) {
          res.json(result);
          console.log(result);
          res.end();
       });
    } catch (err) {
      res.json({
        "error": true,
        "message": "Error executing query"
      })
    }
  });

  // ADMIN - 조근 대상자 삭제
  app.delete('/api/admin/userlist/delete', function(req, res){
    try{
      return pool.request()
        .input('USERID', sql.VarChar(50), req.body.userid)
        .execute('UP_USERLIST_DELETE', function(err, result) {
          res.json(result.recordset);
          console.log(result);
          res.end();
       });
    } catch (err) {
      res.json({
        "error": true,
        "message": "Error executing query"
      })
    }
  });
  
  // ADMIN - 조근 대상자 상태 수정
  app.get('/api/admin/userlist/delete', function(req, res){
    try{
      return pool.request()
        .input('USERID', sql.VarChar(50), req.body.userid)
        .input('STATUS', sql.Char(1), req.body.status)
        .execute('UP_USERLIST_UPDATE', function(err, result) {
          res.json(result.recordset);
          console.log(result);
          res.end();
       });
    } catch (err) {
      res.json({
        "error": true,
        "message": "Error executing query"
      })
    }
  });
});

// app.get('/api', (req, res) => {
//   res.json({username:'bryan'});
// })

// app.get('/test', (req, res) => {
//   sql.connect(config, function(err) {
//     if(err) {
//       console.log(err);
//     }

//     const request = new sql.Request();
//     request.query('select * from tb_code', function (err, rows) {
//       res.json(rows.recordset);
//       console.log(rows.recordset);
//       console.log(rows);
//     })
    
//   })
// });

app.listen(port, () => console.log('Node.js Server is running on port 3001...'));