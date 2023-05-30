import { createContext } from "react";

interface RouteContextProps {
  params: { [key: string]: string };
}

const RouteContext = createContext<RouteContextProps>({
  params: {},
});

export default RouteContext;
