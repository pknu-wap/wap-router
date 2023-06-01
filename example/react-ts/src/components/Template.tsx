import { Link, useNavigate, useParams, usePath } from 'wap-router';
import './Template.css';

interface Props {
  children: React.ReactNode;
}

const Template = ({ children }: Props) => {
  const params = useParams();
  const { hash, search, pathname } = usePath();
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="left">
        <div>Public Routes</div>
        <Link to="/">"/"</Link>
        <Link to="/about">"/about"</Link>
        <Link to="/main/product">"/main/product"</Link>
        <br />
        <div>Route With Params</div>
        <Link to="/main/product/21/user/32">"/main/product/21/user/32"</Link>
        <br />
        <div>Route With Query</div>
        <Link to="/main/product?tab=1&category=2">
          "/main/product?tab=1&category=2"
        </Link>
        <br />
        <div>Route With Hash</div>
        <Link to="/main/product#tab=1">"/main/product#tab=1"</Link>
        <br />
        <div>Complex Route</div>
        <Link to="/main/product/21/user/32?tab=1&category=2#tab=1">
          "/main/product/21/user/32?tab=1&category=2#tab=1"
        </Link>
      </div>
      <div className="right">
        <div>current page: {children}</div>
        <div>
          params:{' '}
          {JSON.stringify(params) === '{}' ? '없음' : JSON.stringify(params)}
        </div>
        <div>hash: {hash || '없음'}</div>
        <div>search: {search || '없음'}</div>
        <div>pathname: {pathname}</div>

        <Link to="/">Go To Home</Link>
        <button onClick={() => navigate('/unknown')}>Go To NotFound</button>
      </div>
    </div>
  );
};

export default Template;
