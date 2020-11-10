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
connection.connect();

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

// 조근/알림팀 목록 조회
app.get('/api/team/list', (req, res) => {
  const sqlSelect = "SELECT teamname, teamcode FROM team";
  connection.query(sqlSelect, (err, result, fields) => {
      res.send(result);
      console.log(result);
    }
  );
});

// 수행팀 설정
app.put('/api/team/check_update', (req, res) => {
  const title = req.body.title;
  const sqlUpdate = "UPDATE test set title = ? WHERE title = '양상길'";
  connection.query(sqlUpdate, title, (err, result) => {
    if (err) console.log(err);
  })
});

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
  const sqlUpdate = "UPDATE test set title = ? WHERE title = '양상길ㅇ'";
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

// 조근 대상자 조회
app.get('/api/select/userList', (req, res) => {
    let executeQuery = async (userid) => {
      try {
          let pool = await sql.connect(config);
          let results = await pool.request()
            .input('USERID', sql.VarChar(20), userid)
            .output('USERID', sql.VarChar(50))
            .output('UESERNAME', sql.VarChar(50))
            .output('STATUS', sql.Char(1))
            .execute('UP_USERLIST_SELECT')
          res.json(result.recordset);
          console.dir(results);
      } catch (err) {
          res.json({
              "error": true,
              "message": "Error executing query"
          })
      }
      executeQuery(userid);
    }; 
});



sql.connect(config).then(pool => {
  // 김민지 테스트
  app.get('/api/kmjtest', function(req, res){
    try{
      return pool.request()
        .input('USERID', sql.VarChar(20), 'mink93')
        .query('SELECT USERID, USERNAME FROM TB_USER WHERE USERID = @USERID')
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

  // 김민지 테스트
  app.get('/api/kmjtest2', function(req, res){
    try{
      return pool.request()
        .input('CATEGORY', sql.VarChar(20), 'USERTEAM')
        .query('SELECT CATEGORY, CATEGORYDESC, CODE, CODEDESC FROM TB_CODE WHERE CATEGORY = @CATEGORY')
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
        .input('USERID', sql.VarChar(20), 'mink93')
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