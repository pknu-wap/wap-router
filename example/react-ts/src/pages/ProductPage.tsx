import Navigator from '../components/Navigator';
import { useNavigate, usePath } from 'wap-router';

const ProductPage = () => {
  const navigate = useNavigate();
  const { hash, pathname, search } = usePath();
  const handleClick = () => {
    navigate('/about');
  };

  return (
    <div>
      <Navigator />
      <div>ProductPage</div>
      <div>
        hash: {hash}, pathname: {pathname}, search: {search}
      </div>
      <div>
        <button onClick={handleClick}>Go To About Page</button>
      </div>
    </div>
  );
};

export default ProductPage;
