import { useState, useEffect } from 'react';

const Delay = props => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      if (props.onFinishDelay !== undefined) {
        props.onFinishDelay();
      }
    }, props.delay);
    return () => clearTimeout(timer);
  }, [props.delay, props.onFinishDelay]); // eslint-disable-line react-hooks/exhaustive-deps

  return visible ? props.children : null;
};

export default Delay;