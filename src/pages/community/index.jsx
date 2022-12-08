import React from "react";
import Description from "../../components/page/about/description";
import FinalHero from "../../components/page/about/hero";
import Join from "../../components/page/community/Join";
import MemberList from "../../components/page/community/MemberList";
import Divider from "../../components/ui/divider";
import { useScrollToTop } from "../../hooks";

const Community = () => {
  useScrollToTop();
  return (
    <>
      <FinalHero text={"Community"} />
      <Description />
      <Join />
      <Divider />
      <MemberList />
    </>
  );
};

export default Community;
