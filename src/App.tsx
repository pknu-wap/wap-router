import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const App = () => {
  const { pathname } = window.location;
  if (pathname === "/") {
    return <HomePage />;
  } else if (pathname === "/about") {
    return <AboutPage />;
  }
};

export default App;
