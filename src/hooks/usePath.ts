import { useContext } from 'react';
import { RouterContext } from '../context';

const usePath = () => {
  const { path } = useContext(RouterContext);

  return path ?? {};
};

export default usePath;
