const cors = require("cors");
const express = require('express');
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection(
  {
    user:"hshao4",
    host:"comp421.cs.mcgill.ca",
    password: "xUW8zy3Y",
    port: 5432,
    database:"cs421"
  }
);

db.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
})


app.post("/register", (req,res) =>{
    const studentid = req.body.studentid;
  const username = req.body.username;
  const password = req.body.password;


  db.query(
    "INSERT INTO users (student_id,email,passcode) VALUES (?,?,?);",
    [studentid,username,password],
    (err, result) =>{
      console.log(err);
    }
  )

});

app.post('/login',(req,res) =>{
  const username = req.body.username;
  const passwrod = req.body.password;

  db.query(
    "SELECT FROM users WHERE email = ? and passcode = ?; ",
    [username,passwrod],
    (err, result) =>{
      if(err){
        console.log({err: err});
      }
      else{
        if (result){
          res.send(result);
        }
        else{
          res.send({message:"Wrong username/password"});
        }
      }
    }
  )

} );

app.listen(3001,()=>{
  console.log("running on 3001 server");
});

module.exports = app;
