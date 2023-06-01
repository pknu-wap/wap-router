import { createContext } from 'react';
import type { Path } from '../types';

interface RouterContextProps {
  path: Path;
  changePath: (path: string) => void;
}

const RouterContext = createContext<RouterContextProps>({
  path: {
    hash: '',
    pathname: '',
    search: '',
  },
  changePath: () => undefined,
});

export default RouterContext;
