const cors = require("cors");
const express = require('express');
const mysql = require("mysql");
const path = require('path');
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection(
  {
    user:"cs307-group01",
    host:"127.0.0.1",
    password: "ng8DCt2qSa7rXHEP",
    database:"cs307-group01-DB"
  }
);


// db.connect(function(err){
//     if(err) throw err;
//     console.log("Connected!");
// })


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
  const password = req.body.password;
  console.log("login server running -!!!!!!!!!");
  console.log("username is", username);
  console.log("password is", password);
  
  if(username == "hello@m.com"){
    res.send({username: username})
  }
  else{
    res.send({message:"Wrong username/password, Please try again!"})
  }
  

  
  // db.query(
  //   "SELECT FROM users WHERE email = ? and passcode = ?; ",
  //   [username,password],
  //   (err, result) =>{
  //     if(err){
  //       console.log("login server running -!!!!!!!!!");
  //       console.log("username is", username);
  //       console.log("password is", password);
  //       console.log({err: err});
  //     }
  //     else{
  //       if (result){
  //         res.send(result);
  //       }
  //       else{
  //         res.send({message:"Wrong username/password"});
  //       }
  //     }
  //   }
  // )

} );

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/*const port = process.env.PORT || 5000;
app.listen(port);
console.log(port);
*/
app.listen(3001,()=>{
  console.log("running on 3001 server");
});

module.exports = app;
