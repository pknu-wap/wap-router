import { useContext } from 'react';
import { RouteContext } from '../context';

/**
 * @example
 *
 * const { productId, userId } = useParams();
 *
 * // path = '/main/product/45/user/12'
 * // productId = '45'
 * // userId = '12'
 */
const useParams = () => {
  const { params } = useContext(RouteContext);

  return params ?? {};
};

export default useParams;
