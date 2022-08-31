import clsx from "clsx";
import { useEffect, useState } from "react";

export default function AnimatingNumber({
  number,
  speed,
}: {
  number: number;
  speed: number;
}): JSX.Element {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => {
        let increment = 0;
        if (prev < number) {
          increment = Math.ceil((number - prev) / speed);
        }
        return prev + increment;
      });
    }, 50);
    if (count === number) {
      setTimeout(() => {
        setCount(0);
      }, 3000);
    }
  }, [number, count, speed]);

  return (
    <div
      className={clsx(
        "font-mono transition-all duration-500 ease-out flex justify-end",
        count === 0
          ? "opacity-50 scale-50"
          : count === number
          ? "opacity-100 scale-100"
          : "opacity-100 scale-100"
      )}
    >
      {count.toLocaleString()}
    </div>
  );
}
