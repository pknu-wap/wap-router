import { useContext } from "react";
import RouterContext from "./RouterContext";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";

const Routes = () => {
  const { path } = useContext(RouterContext);

  return (
    <>
      {path === "/" && <HomePage />}
      {path === "/about" && <AboutPage />}
    </>
  );
};

export default Routes;
