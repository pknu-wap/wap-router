import { forwardRef, useContext } from "react";
import RouterContext from "./RouterContext";

interface LinkProps
  // href는 to로 전달하기 때문에 제거
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to: string;
  children: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function (
  { to, children, ...props },
  ref
) {
  const { changePath } = useContext(RouterContext);

  // 링크를 클릭했을 때 서버로 요청을 보내지 않도록
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    changePath(to);
  };

  return (
    <a href={to} ref={ref} {...props} onClick={handleClick}>
      {children}
    </a>
  );
});

export default Link;
