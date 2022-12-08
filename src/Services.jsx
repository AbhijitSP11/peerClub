import { createContext, useState } from "react";

export const ServiceContext = createContext({
  services: [],
  auth: null,
});

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [auth, setAuth] = useState(null);

  return (
    <ServiceContext.Provider value={{ services, setServices, auth, setAuth }}>
      {children}
    </ServiceContext.Provider>
  );
};
