import { useCallback, useContext } from "react";
import RouterContext from "../core/RouterContext";

const useNavigate = () => {
  const { path, changePath } = useContext(RouterContext);

  const navigate = useCallback(
    (nextPath: string) => {
      if (path === nextPath) return;

      changePath(nextPath);
    },
    [path, changePath]
  );

  return navigate;
};

export default useNavigate;
