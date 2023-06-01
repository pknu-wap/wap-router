import { createContext } from 'react';
import type { Location } from '../types';

interface LocationContextProps {
  location: Location;
}

const LocationContext = createContext<LocationContextProps>({
  location: {
    pathname: '',
    search: '',
    hash: '',
  },
});

export default LocationContext;
