import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import axios from "axios";
import { API_LINK } from "../../../../config";
import { useParams } from "react-router-dom";

import { useScrollToTop } from "../../../../hooks";
import React, { useEffect, useState } from "react";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";
import styles from "./styles.module.scss";

const ContentCourse = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useScrollToTop();

  useEffect(() => {
    const getService = async () => {
      const res = await axios.get(`${API_LINK}/api/courses/${id}?populate=*`);
      setData(res.data.data);
    };

    getService();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.vandanainfo}>
      <h1>Course content</h1>
      <Accordion className={styles.vandanainfo__accordian}>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Week 1</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div
              dangerouslySetInnerHTML={{ __html: data?.attributes.week1 }}
            ></div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>Week 2</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div
                dangerouslySetInnerHTML={{ __html: data?.attributes.week2 }}
              ></div>
            </AccordionItemPanel>
          </AccordionItem>

          <AccordionItemHeading>
            <AccordionItemButton>Week 3</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <div
              dangerouslySetInnerHTML={{ __html: data?.attributes.week3 }}
            ></div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Week 4</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
          <div
              dangerouslySetInnerHTML={{ __html: data?.attributes.week4 }}
            ></div>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Certificate</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              When you complete our Live Peer Training course, you will receive
              a certificate of completion, which you can share with your
              friends, relatives, co-workers and potential employers.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ContentCourse;
