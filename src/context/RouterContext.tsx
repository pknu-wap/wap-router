import { createContext } from 'react';

interface RouterContextProps {
  path: string;
  changePath: (path: string) => void;
}

const RouterContext = createContext<RouterContextProps>({
  path: '',
  changePath: () => undefined,
});

export default RouterContext;
