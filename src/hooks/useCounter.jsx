import { useCallback, useEffect, useState, useMemo } from "react";


export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleClick = useCallback(() => {
    console.log(count);
    if(count < 10) {
    setCount((count) => count + 1);
    }
  },[count]);

  const handleShow = useCallback(() => {
    setIsShow((isShow) => (!isShow));
  }, []);

  return {count, isShow, doubleCount, handleClick, handleShow};
}
