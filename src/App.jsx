import "./App.css";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";
import Home from "./pages/home";
import Services from "./pages/services";
import Service from "./pages/service";
import { Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ServiceContext } from "./Services";
import axios from "axios";
import Success from "./pages/success";
import { API_LINK } from "./config";
import Login from "./pages/login";
import TermsAndConditions from "./pages/termsandconditions";
import PrivacyPolicy from "./pages/privacypolicy";
import Community from "./pages/community";
import Register from "./components/page/register";
import Payment from "./pages/payment";
import MyLearning from "./pages/myLearning";
import DigitalMarketing from "./pages/digitalMarketing";

function App() {
  const context = useContext(ServiceContext);
  console.log(context);
  useEffect(() => {
    const getServices = async () => {
      const res = await axios.get(`${API_LINK}/api/courses?populate=*`);
      context.setServices(res.data.data);
    };
    getServices();
  }, []);

  const LayoutComponent = ({ children }) => (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutComponent>
              <Home />
            </LayoutComponent>
          }
        />
        <Route
          path="/services"
          element={
            <LayoutComponent>
              <Services />
            </LayoutComponent>
          }
        />
        <Route
          path="/digitalMarketing"
          element={
            <LayoutComponent>
              <DigitalMarketing />
            </LayoutComponent>
          }
        />

        <Route
          path="/service/:id"
          element={
            <LayoutComponent>
              <Service />
            </LayoutComponent>
          }
        />
        <Route
          path="/success"
          element={
            <LayoutComponent>
              <Success />
            </LayoutComponent>
          }
        />
        <Route
          path="/community"
          element={
            <LayoutComponent>
              <Community />
            </LayoutComponent>
          }
        />

        <Route
          path="/learning"
          element={
            <LayoutComponent>
              <MyLearning />
            </LayoutComponent>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/payment/:id" element={<Payment />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
