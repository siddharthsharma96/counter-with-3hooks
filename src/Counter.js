import { useRef, useState, useEffect } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);
  const setter = useRef("");
  const handleDecrement = () => {
    setValue(value - 1);
    setter.current.style.color = "red";
  };
  const handleIncrement = () => {
    setValue(value + 1);
    setter.current.style.color = "green";
  };
  // const handleIncrementAsync = () => {
  //   setTimeout(() => {
  //     setValue(value + 1);
  //   }, 3000);
  // };
  useEffect(() => {
    let timer;
    if (value < 0) {
      timer = setTimeout(() => {
        console.log("timer executed");
        setValue(0);
        setter.current.style.color = "green";
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <div>
      <p ref={setter}>{value}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      {value < 0 && <p>Negative value found</p>}
    </div>
  );
};
export default Counter;
