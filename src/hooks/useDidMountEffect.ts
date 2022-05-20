import { useRef, useEffect } from 'react';

export const useDidMountEffect = (callback: () => void, deps: (string | number)[]) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      callback();
    } else {
      didMount.current = true;
    }
  }, deps);
};
