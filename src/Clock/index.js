import { useEffect, useState } from "react";
import "./style.css"

const dateFormat = {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
};

const Clock = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <p className="clock">
            Dzisiaj jest {date.toLocaleString(undefined, dateFormat)}
        </p>
    );
};

export default Clock;