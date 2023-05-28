import { forwardRef } from "react";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(function (
  { to, children, ...props },
  ref
) {
  return (
    <a href={to} ref={ref} {...props}>
      {children}
    </a>
  );
});

export default Link;
