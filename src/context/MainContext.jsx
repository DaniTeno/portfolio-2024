import { createContext, useState } from "react";
import t from "prop-types";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState({
    start_point: true,
    socials: true,
    projects: true,
  });

  return (
    <MainContext.Provider value={[isVisible, setIsVisible]}>
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: t.any,
};
