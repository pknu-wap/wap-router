import { useContext } from 'react';
import { RouterContext } from '../context';
/**
 * @example
 *
 * const { hash, pathname, search } = usePath();
 *
 * // path = '/main/product/45?sort=asc#title'
 * // hash = '#title'
 * // pathname = '/main/product/45'
 * // search = '?sort=asc'
 */
const usePath = () => {
  const { path } = useContext(RouterContext);

  return path ?? {};
};

export default usePath;
