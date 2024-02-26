import { createContext, useState } from "react";
import t from "prop-types";

export const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <HeaderContext.Provider value={[isVisible, setIsVisible]}>
      {children}
    </HeaderContext.Provider>
  );
};

HeaderProvider.propTypes = {
  children: t.any,
};
