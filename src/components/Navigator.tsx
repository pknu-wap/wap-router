import { Link } from "../wap-router";

const Navigator = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "50px",
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/main/product">Product</Link>
      <Link to="/main/product/21/user/32">Product Detail-1</Link>
    </div>
  );
};

export default Navigator;
