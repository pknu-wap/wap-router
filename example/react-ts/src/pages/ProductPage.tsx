import Navigator from '../components/Navigator';
import { useNavigate } from 'wap-router';

const ProductPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <Navigator />
      <div>ProductPage</div>
      <div>
        <button onClick={handleClick}>Go To About Page</button>
      </div>
    </div>
  );
};

export default ProductPage;
