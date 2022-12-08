import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useNavigate, Link } from "react-router-dom";
import { API_LINK } from "../../config";
import { ServiceContext } from "../../Services";
import styles from "./styles.module.scss";

const Card = ({ name, image }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={image} width={250} height={200} />
        </div>
        <div className={styles.name}>
          <h2>{name}</h2>
        </div>
        <div className={styles.button}>
          <Link to="/digitalMarketing">watch</Link>
        </div>
      </div>
    </>
  );
};

const MyLearning = () => {
  const [data, setData] = useState(null);
  const AuthContext = useContext(ServiceContext);
  const navigate = useNavigate();
  if (AuthContext.auth === null) {
    navigate("/contact");
  }

  useEffect(() => {
    const fetchData = async () => {
      var data = await axios.get(`${API_LINK}/api/purchases`);
      data = data.data.data;
      console.log(data);
      const userdata = data.filter(
        (item) => item.attributes.userid === AuthContext.auth.user.id
      );

      setData(userdata);
      console.log(userdata);
    };

    fetchData();
  }, []);

  if (data === null) {
    return (
      <div
        style={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Oval
          height={80}
          width={80}
          color="#33bd63"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#33bd63"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );
  }
  return (
    <div>
      <h2 style={{ padding: "15px" }}>Your Courses</h2>
      <div className={styles.divider}></div>
      <div className={styles.courses}>
        {data.map((item, i) => (
          <Card name={item.attributes.cname} image={item.attributes.cimage} />
        ))}
      </div>
    </div>
  );
};

export default MyLearning;
