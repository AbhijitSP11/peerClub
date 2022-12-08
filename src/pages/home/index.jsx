import { CardList } from "../../components/page/home";
import Company from "../../components/page/home/Company-section";
import ConnectWithUs from "../../components/page/home/connectwithus";
import Hero from "../../components/page/home/hero";
import ServiceList from "../../components/page/home/servicelist";
import Testimonial from "../../components/page/home/Testimonial/Testimonial";
import WhyUs from "../../components/page/home/whyus";
import Divider from "../../components/ui/divider";
import { useScrollToTop } from "../../hooks";

export default function Home() {
  useScrollToTop();
  return (
    <div>
      <Hero text={"Learn popular skills from the brightest minds in Inida"} />
      <CardList />
      <Divider />
      <WhyUs />
      <Divider />
      <ServiceList />
      <Divider />
      <Company />
      <Testimonial />
      <ConnectWithUs />
    </div>
  );
}
