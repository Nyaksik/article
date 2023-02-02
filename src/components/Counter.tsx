import {useState} from "react";
import classes from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div className={classes.btn}>
      {count}
      <button onClick={() => setCount(count + 1)}>клик</button>
    </div>
  );
};

export default Counter;
