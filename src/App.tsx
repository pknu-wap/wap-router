import { useContext } from "react";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import RouterContext from "./lib/core/RouterContext";
import Router from "./lib/core/Router";

const App = () => {
  const { path } = useContext(RouterContext);

  return (
    <Router>
      {path === "/" && <HomePage />}
      {path === "/about" && <AboutPage />}
    </Router>
  );
};

export default App;
