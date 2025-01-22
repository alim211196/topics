import { createContext, useState } from "react";

export const MyContext = createContext();

export const ContextProvider = (props) => {
  const [contextCount, setContextCount] = useState(0);

  return (
    <MyContext.Provider value={{ contextCount, setContextCount }}>
      {props.children}
    </MyContext.Provider>
  );
};
