import { createContext } from "react";

const NameContext = createContext({
  name: "",
  setName: () => {},
});

export default NameContext;
