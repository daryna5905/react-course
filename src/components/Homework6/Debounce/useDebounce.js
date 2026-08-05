import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState('');
  useEffect(() => {
    const id = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(id);
  }, [value]);

  return debounceValue;
}

export default useDebounce;
