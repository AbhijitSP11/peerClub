import React, { useContext, useState } from "react";
import Input from "../../../ui/input";
import styles from "./styles.module.scss";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { API_LINK } from "../../../../config";
import { ServiceContext } from "../../../../Services";

const STRIPE_PK =
  "pk_live_51Lm9BbGtC3BrXXI1M9B8txwWcAE2nJhiT2R0qI7YHqfrJ1num2f31XmRbwrkAXWkeSeyQJnRRGQeeAS8AsDsfymN0070B274cD";

const stripePromise = loadStripe(STRIPE_PK);

const Form = ({ price }) => {
  const context = useContext(ServiceContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (context.auth === null) {
      navigate("/login");
      return;
    }

    navigate(`/payment/${id}`);

    // const stripe = await stripePromise;
    // const res = await axios.post(`${API_LINK}/api/booking/pretransaction`, {
    //   service: {
    //     id,
    //   },
    //   user: {
    //     name: values.userName,
    //     contact: values.contact,
    //     email: values.email,
    //     date: values.date,
    //   },
    // });

    // const session = res.data;

    // const result = await stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <button className={styles.btn} type="submit">
          Buy this course at {price}/-
        </button>
      </form>

      <img
        src="../static/dots.png"
        alt="canada-gateway"
        className={styles.leftdots}
      />
      <img
        src="../static/dots.png"
        alt="canada-gateway"
        className={styles.rightdots}
      />
    </div>
  );
};

export default Form;
