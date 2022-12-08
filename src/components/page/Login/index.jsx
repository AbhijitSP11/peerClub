import axios from "axios";
import React, { useContext, useState } from "react";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import { API_LINK } from "../../../config";
import { ServiceContext } from "../../../Services";
import Input from "../../ui/input";

import styles from "./styles.module.scss";

const Login = () => {
  const authContext = useContext(ServiceContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signIn = async () => {
    try {
      const user = await axios.post(`${API_LINK}/api/auth/local`, {
        identifier: email,
        password,
      });
      console.log(user);
      authContext.setAuth(user.data);
      navigate("/");
    } catch (error) {
      console.log(error);
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
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            signIn();
          }}
        >
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
          <div style={{ display: "flex" }}>
            <span>Not Registered? </span>
            <h4
              style={{ color: "#33bd63", cursor: "pointer" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              &nbsp; Create an account
            </h4>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
