import { Link } from 'wap-router';

const Navigator = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '50px',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <Link to="/">/</Link>
      <Link to="/about">/about</Link>
      <Link to="/main/product">/main/product</Link>
      <Link to="/main/product/21/user/32">/main/product/21/user/32</Link>
      <Link to="/main/product?tab=1&category=2#hashswan">
        /main/product?tab=1&category=2#hashswan
      </Link>
    </div>
  );
};

export default Navigator;
