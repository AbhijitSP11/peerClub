import React from "react";
import FinalHero from "../../components/page/contact/hero";
import LoginC from "../../components/page/Login";
// import ContactR from "./ContactR";
import { useScrollToTop } from "../../hooks";

const Login = () => {
  useScrollToTop();
  return (
    <>
      <LoginC />
    </>
  );
};

export default Login;
