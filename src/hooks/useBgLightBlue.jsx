import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useBgLightBlue = () => {

    const router = useRouter();
    //console.log(router);

    const bgColor = useMemo(() => {
      //return router.pathname === "/" ? "lightblue" : "yellowgreen";
      switch(router.pathname) {
        case "/": {
          return "lightblue";
        }

        case "/about": {
          return "yellowgreen";
        }

        default: {
          return "";
        }

      }
    }, [router.pathname]);

    useEffect(() => {
      
      document.body.style.backgroundColor = bgColor;
      return () => {
     
      document.body.style.backgroundColor = "";
  
      };
  }, [router.pathname]);
  
  }