import Navigator from "../components/Navigator";
import { useNavigate } from "../wap-router";

const ProductDetailPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Navigator />
      <div>ProductDetailPage</div>
      <div>
        <button onClick={handleClick}>Go To Home Page</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
