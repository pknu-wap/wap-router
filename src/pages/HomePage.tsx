import Navigator from "../components/Navigator";
import { Route, useNavigate } from "../wap-router";
import createRoutesFromElements from "../wap-router/core/createRoutesFromElements";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  const Test = () =>
    createRoutesFromElements(
      <>
        <Route path="/test" element={<HomePage />} />
        <Route path="/test" element={<HomePage />} />
        <Route path="/test" element={<HomePage />}>
          <Route path="/test" element={<HomePage />} />
        </Route>
        <Route path="/test" element={<HomePage />} />
      </>
    );

  console.log(Test());

  return (
    <div>
      <Navigator />
      <div>HomePage</div>
      <div>
        <button onClick={handleClick}>Go To About Page</button>
      </div>
    </div>
  );
};

export default HomePage;
