import { useCallback, useEffect, useState } from "react";

export const useInputArray = () => {
    const [text, setText] = useState("");
    const [array, setArray] = useState([]);
  
    const handleChange = useCallback((e) => {
      if(e.target.value.length > 5) {
        alert("5文字以内にしてください");
        return;
      }
      setText(e.target.value.trim());
      //console.log(text);
    }, []);
  
    const handleArray = useCallback(() => {
      setArray((prevArray) => {
        if(prevArray.includes(text)) {
          alert("同じテキストは追加できません");
          return prevArray;
        }
        
        return [...prevArray, text];
      });
  }, [text]);
  
   return {text, array, handleChange, handleArray};
  }