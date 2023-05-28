import { Link } from "../wap-router";

const Navigator = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
};

export default Navigator;
