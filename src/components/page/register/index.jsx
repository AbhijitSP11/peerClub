import axios from "axios";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import { API_LINK } from "../../../config";
import Input from "../../ui/input";

import styles from "./styles.module.scss";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const signUp = () => {
    try {
      axios.post(`${API_LINK}/api/auth/local/register`, {
        username,
        name,
        email,
        password,
      });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img
          src="../../../../../public/ppcLogo.png"
          style={{ height: "180px" }}
        />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signUp();
          }}
        >
          <Input
            label={"Name"}
            type={"text"}
            placeholder={"Enter your name here"}
            onChange={(e) => {
              setName(e);
            }}
          />
          <Input
            label={"User name"}
            type={"text"}
            placeholder={"Enter your name here"}
            onChange={(e) => {
              setUsername(e);
            }}
          />
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Enter your email here"}
            onChange={(e) => {
              setEmail(e);
            }}
          />
          <Input
            label={"Password"}
            type={"text"}
            placeholder={"Enter your password here"}
            onChange={(e) => {
              setPassword(e);
            }}
          />
          <button type="submit">Register</button>
          <div style={{ display: "flex" }}>
            <span>Already have an account? </span>
            <h4
              style={{ color: "#33bd63", cursor: "pointer" }}
              onClick={() => {
                navigate("/contact");
              }}
            >
              &nbsp; Login
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
