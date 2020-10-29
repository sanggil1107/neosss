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
  database: 'NEOSSWORK'
};

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