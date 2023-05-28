import { createContext } from "react";

interface RouterContextProps {
  path: string;
  changePath: React.Dispatch<React.SetStateAction<string>>;
}

const RouterContext = createContext<RouterContextProps>({
  path: "",
  changePath: () => undefined,
});

export default RouterContext;
