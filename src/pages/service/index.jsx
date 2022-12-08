import axios from "axios";
import React, { useEffect, useState } from "react";
import ConsultantInfo from "../../components/page/service/consultantInfo";
import Form from "../../components/page/service/form";
import FinalHero from "../../components/page/service/hero";
import ServiceInfo from "../../components/page/service/serviceInfo";
import WhatYouCan from "../../components/page/service/whatyoucan";
import Enroll from "../../components/page/service/enrollNow";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { API_LINK } from "../../config";
import { useScrollToTop } from "../../hooks";
import ContentCourse from "../../components/page/service/contentCourse";

const Service = () => {
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
    <div>
      {data === null ? (
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
            color="#bd3333"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#bd333391"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <>
          <FinalHero
            title={data.attributes.title}
            image={`${data.attributes.image.data.attributes.url}`}
          />
          <ServiceInfo
            title={data.attributes.title}
            description={data.attributes.description}
          />

          <Enroll price={data.attributes.price} />

          <ContentCourse />

          {data.attributes.learning === "none" ? (
            <></>
          ) : (
            <WhatYouCan
              benefits={data.attributes.learning}
              imageTwo={`${data.attributes.imageTwo.data.attributes.url}`}
            />
          )}

          {data.attributes.instructorInfo?.name === "none" ? (
            <></>
          ) : (
            <ConsultantInfo
              consultantName={data.attributes.instructorInfo.name}
              consultantDetails={data.attributes.instructorInfo.description}
              consultantImage={`${data.attributes.instructorImage.data.attributes.url}`}
            />
          )}

          {/* <GuidanceInfo {...data.attributes.guidanceDetails} /> */}
          <Form price={data.attributes.price} />
          {/* <video width="400" controls>
            <source
              src={data.attributes.video.data.attributes.url}
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video> */}
        </>
      )}
    </div>
  );
};

export default Service;
