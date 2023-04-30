import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";


const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
  };


  function fetchdata() {
    fetch(`http://10.10.0.22:5000/api/pentagol/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function checkInputs() {
    if (username.trim().length < 5 || password.trim().length < 5) {
      console.log("kjwcbkwj");
    } else {
      if (username === "adminpentagol" && password === "adminpentagol0101"){
        fetchdata();
        navigate("/admin/panel");
      }else{
        toast.error("incorrect username or password")
      }
    }
  }

  

  return (
    <div className="login-wrapper">
      <form className="Login" onSubmit={handlesubmit}>
        <h2 className="Login-heading">Login</h2>
        <label htmlFor="username">
          username
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            className="data-input"
          />
        </label>
        <label htmlFor="username">
          password
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            className="data-input"
          />
        </label>
        <button type="submit" onClick={checkInputs} className="submitToLogin">
          Login
        </button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Index;

// ADMIN_USERNAME = adminpentagol;
// ADMIN_PASSWORD = adminpentagol0101;
