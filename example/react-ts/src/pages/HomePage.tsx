import Navigator from '../components/Navigator';
import { useNavigate } from 'wap-router';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

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
