import Navigator from '../components/Navigator';
import { useNavigate } from 'wap-router';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <Navigator />
      <div>Not Found</div>
      <div>
        <button onClick={handleClick}>Go To Home Page</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
