import { useCallback, useEffect, useState } from "react";


export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    console.log(count);
    if(count < 10) {
    setCount((count) => count + 1);
    }
  },[count]);

  const handleShow = useCallback(() => {
    setIsShow((isShow) => (!isShow));
  }, []);

  return {count, isShow, handleClick, handleShow};
}
