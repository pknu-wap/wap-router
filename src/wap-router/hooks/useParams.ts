import { useContext } from "react";
import { RouteContext } from "../context";

const useParams = () => {
  const { params } = useContext(RouteContext);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return params ? params : {};
};

export default useParams;
