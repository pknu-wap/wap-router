import { useCallback, useContext } from 'react';
import { RouterContext } from '../context';

/**
 * @example
 *
 * const navigate = useNavigate();
 *
 * // navigate('/main/product/45?sort=asc#title')
 */
const useNavigate = () => {
  const { path, changePath } = useContext(RouterContext);

  const navigate = useCallback(
    (nextPath: string) => {
      if (path.pathname === nextPath) return;

      changePath(nextPath);
    },
    [path, changePath],
  );

  return navigate;
};

export default useNavigate;
