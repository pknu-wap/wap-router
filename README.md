<h1 align="center">WAP Router</h1>

wap-router은 react-router-dom의 영향을 받아 개발한 리액트 라우팅 라이브러리입니다.

<p align="center">
  <a href="https://github.com/pknu-wap/wap-router/blob/main/LICENSE">
    <img src="https://badgen.net/github/license/pknu-wap/wap-router">
  </a>
  <a href="https://www.npmjs.com/package/wap-router">
    <img src="https://img.shields.io/npm/dm/wap-router.svg?style=flat-round" alt="npm downloads">
  </a>
  <img alt="Github Stars" src="https://badgen.net/github/stars/pknu-wap/wap-router" />

</p>
<p align="center">
  <img src="https://badgen.net/github/release/pknu-wap/wap-router"/>
  <img src="https://badgen.net/packagephobia/publish/wap-router"/>
</p>

## Feature

- **Declarative Routing**: 컴포넌트 기반으로 라우팅을 정의하고 표현할 수 있습니다.
- **Dynamic Routing**: 동적 라우팅을 지원합니다.
- **lightweight**: 불필요한 코드를 모두 제거하여 경량화된 라이브러리입니다.
- **Support Typescript**: 타입스크립트를 지원합니다.

## Installation

Install this library with the following command.

```sh
$ pnpm add wap-router
# or
$ yarn add wap-router
# or
$ npm intall wap-router
```

## Usage

우선 라우팅을 정의할 컴포넌트를 생성합니다.
동적 라우팅은 ":"를 사용하여 정의합니다. ex) "/main/product/:productId/user/:userId"
"\*"를 사용하여 와일드카드 라우팅을 정의할 수 있습니다. ex) "/main/product/\*"
주의할 점은 Route의 순서에 따라 라우팅이 결정되기 때문에 주의해야합니다.
ex) "/product/:productId", "/product/123" 순으로 정의하면 "/product/123"은 "/product/:productId"로 라우팅됩니다.

```tsx
import { Router, Routes, Route } from 'wap-router';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/main/product" element={<ProductPage />} />
        <Route
          path="/main/product/:productId/user/:userId"
          element={<ProductDetailPage />}
        />
        {/* "/*"은 모든 경로를 매칭시킨다. */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
```

Link 컴포넌트를 사용하여 라우팅을 변경할 수 있습니다.

```tsx
import { Link } from 'wap-router';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/about">About</Link>
      <Link to="/main/product">Product</Link>
    </div>
  );
};
```

useNavigate를 사용하여 라우팅을 변경할 수 있습니다.

```tsx
import { useNavigate } from 'wap-router';

const ProductPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Product Page</h1>
      <button onClick={() => navigate('/main/product/123/user/456')}>
        Product Detail
      </button>
    </div>
  );
};
```

useParams를 사용하여 현재 경로의 동적 라우팅 정보를 알 수 있습니다.

```tsx
import { useParams } from 'wap-router';

// route => "/main/product/:productId/user/:userId"
// path  => "/main/product/123/user/456"

// productId: 123, userId: 456

const ProductDetailPage = () => {
  const { productId, userId } = useParams();
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>productId: {productId}</p>
      <p>userId: {userId}</p>
    </div>
  );
};
```

usePath를 사용하여 현재 경로의 정보를 알 수 있습니다.

```tsx
import { usePath } from 'wap-router';

// route => "/main/product/:productId/user/:userId"
// path  => "/main/product/123/user/456?name=abc#name"

// pathname: "/main/product/123/user/456"
// search: "?name=abc"
// hash: "#name"

const ProductDetailPage = () => {
  const { pathname, hash, search } = usePath();
  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>
        pathname: {pathname}, search: {search}, hash: {hash}
      </p>
    </div>
  );
};
```
