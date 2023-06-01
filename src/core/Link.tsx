import React, { forwardRef, useContext } from 'react';
import { RouterContext } from '../context';

interface LinkProps
  // href는 to로 전달하기 때문에 제거
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  to: string;
  children: React.ReactNode;
}

/**
 * @example
 *
 * <Link to="/home">Home</Link>
 *
 * @description
 * Link 컴포넌트를 클릭하면 changePath 함수를 호출하여 to에 해당하는 값으로 path 상태를 업데이트한다.
 */
const Link = forwardRef<HTMLAnchorElement, LinkProps>(function (
  { to, children, ...props },
  ref,
) {
  const { changePath } = useContext(RouterContext);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // 링크를 클릭했을 때 서버로 요청을 보내지 않도록 브라우저의 기본 동작을 막는다.
    e.preventDefault();
    changePath(to);
  };

  return (
    <a href={to} ref={ref} {...props} onClick={handleClick}>
      {children}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
