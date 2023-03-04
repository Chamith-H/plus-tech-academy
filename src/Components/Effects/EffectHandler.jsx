import React, { useState, useEffect } from 'react';
import Animater from './Animater';

const EffectHandler = (WrappedComponent, delay, process, load) => {
  const WithDelayComponent = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const what = process
    const want = load

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, delay);

      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <>
        {isLoading ? <Animater Process={what} Load={want}></Animater> : <WrappedComponent {...props} />}
      </>
    );
  };

  return WithDelayComponent;
};

export default EffectHandler;