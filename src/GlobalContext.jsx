import { useContext, createContext, useState, useEffect } from 'react';
import { data } from './data';
const GlobalContext = createContext();
// custom Hook;
export const useGlobalContext = () => useContext(GlobalContext);
const GlobalContextAPI = ({ children }) => {
  const [projects, setProjects] = useState(data);
  console.log(projects);

  return (
    <GlobalContext.Provider value={{ projects }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalContextAPI;
