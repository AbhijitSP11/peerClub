import React, { useState } from "react";
import CardList from "../../components/page/services/cardlist";
import FinalHero from "../../components/page/services/hero";
import SearchBox from "../../components/page/services/searchbox";
import { useScrollToTop } from "../../hooks";

const Services = () => {
  const [searchItem, setSearchItem] = useState("");
  useScrollToTop();
  return (
    <>
      <FinalHero text={"Our Services"} />
      <SearchBox onChange={setSearchItem} />
      <CardList searchItem={searchItem} />
    </>
  );
};

export default Services;
