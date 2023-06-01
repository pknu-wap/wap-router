import { useContext } from 'react';
import { RouteContext } from '../context';

const useParams = () => {
  const { params } = useContext(RouteContext);

  return params ?? {};
};

export default useParams;
