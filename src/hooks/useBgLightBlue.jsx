import { useCallback, useEffect, useState } from "react";

export const useBgLightBlue = () => {
    useEffect(() => {
      
      document.body.style.backgroundColor = "lightblue";
  
      return () => {
     
      document.body.style.backgroundColor = "yellowgreen";
  
      };
  }, []);
  
  }