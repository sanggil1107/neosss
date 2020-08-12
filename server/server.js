const express = require('express');
const app = express();
const sql = require('mssql');
const bodyParser = require('body-parser');
//const api = require('./routes/index');
const port =process.env.PORT || 3001;
const config = {
  user: 'neoss',
  password: 'new1234!',
  server: 'neoss.database.windows.net',
  database: 'NEOSSWORK'
};


// app.use('/api', (req, res)=> res.json({username:'bryan'}));
//app.use('/', api)
app.get('/api', (req, res) => {
  res.send({username:'home'});
})

app.get('/hi', (req, res) => {
  res.send({username: 'hello react!'});
})

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
