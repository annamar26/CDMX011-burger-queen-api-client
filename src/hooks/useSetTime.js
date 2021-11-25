import { useState, useEffect } from "react";
export const useSetTime = () => {
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        setInterval(() => setTime(Date.now()), 1000);
    }, []);

    return { time }
}