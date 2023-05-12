import { createContext, useContext, useState } from "react";
import SimpleBackdrop from "../Components/Common/MUI/BackDrop";

const BackDropContext = createContext();

const BackDropProvider = ({ children }) => {
  const [backDropState, setBackDropState] = useState(false);
  return (
    <BackDropContext.Provider children={children} value={{ setBackDropState }}>
      <SimpleBackdrop backDropState={backDropState} />
      {children}
    </BackDropContext.Provider>
  );
};
export default BackDropProvider;

export const useBackDrop = () => useContext(BackDropContext);
