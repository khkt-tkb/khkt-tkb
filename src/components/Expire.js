import { useState, useEffect } from 'react';

const Expire = props => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, props.delay);
    return () => clearTimeout(timer);
  }, [props.delay]);

  return visible ? props.children : null;
};

export default Expire;