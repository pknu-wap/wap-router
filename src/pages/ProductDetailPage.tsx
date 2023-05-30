import Navigator from "../components/Navigator";
import { useNavigate, useParams } from "../wap-router";

const ProductDetailPage = () => {
  const { productId, userId } = useParams();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <Navigator />
      <div>ProductDetailPage</div>
      <div>
        productId: {productId}, userId: {userId}
      </div>
      <div>
        <button onClick={handleClick}>Go To Home Page</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
