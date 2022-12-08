import React from "react";
import video from "../../../public/static/Digital Marketing.mp4";
import video2 from "../../../public/static/Python_video.mp4";
import video3 from "../../../public/static/cpr.mp4";
import styles from "./styles.module.scss";
import { useState } from "react";
import MenuBar from "../../components/ui/tiptap";

const DigitalMarketing = () => {
  const data = 3;
  const [videoIndex, setVideoIndex] = useState(0);

  return (
    <div className={styles.container}>
      {videoIndex === 0 && (
        <div className={styles.video}>
          <video width="100%" height="300px" controls>
            <source src={video3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {videoIndex === 1 && (
        <div className={styles.video}>
          <video width="100%" height="300px" controls>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {videoIndex === 2 && (
        <div className={styles.video}>
          <video width="100%" height="300px" controls>
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {videoIndex === 0 && (
        <button className={styles.buttonBtn}
          onClick={(err) => {
            setVideoIndex((e) => e + 1);
          }}
        >
          next
        </button>
      )}

      {videoIndex + 1 < data && videoIndex + 1 > 1 && (
        <>
          <button className={styles.buttonBtn}
            onClick={(err) => {
              setVideoIndex((e) => e + 1);
            }}
          >
            next
          </button>

          <button className={styles.buttonBtn}
            onClick={(err) => {
              setVideoIndex((e) => e - 1);
            }}
          >
            previous
          </button>
        </>
      )}

      {videoIndex + 1 === data && (
        <button className={styles.buttonBtn}
          onClick={(err) => {
            setVideoIndex((e) => e - 1);
          }}
        >
          previous
        </button>
      )}

      <div>
        <MenuBar />
      </div>
    </div>
  );
};

export default DigitalMarketing;
