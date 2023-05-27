import { createContext, useContext } from "react";

const DashboardContext = createContext();

function DashboardContextProvider({ children }) {
  return <DashboardContext.Provider>{children}</DashboardContext.Provider>;
}

export { DashboardContextProvider, DashboardContext };

export const DashboardState = () => {
  return useContext(DashboardContext);
};
