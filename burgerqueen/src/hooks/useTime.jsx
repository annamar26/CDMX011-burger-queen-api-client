import { useEffect, useState } from "react";

export const useTime = () => {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    setInterval(() => setTime(Date.now()), 1000);
    return () => {};
  }, []);

  return {
    time,
  };
};
