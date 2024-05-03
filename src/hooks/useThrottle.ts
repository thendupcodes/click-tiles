import { useRef } from "react";

const useThrottle = <T extends (...args: unknown[]) => void>(
  cb: T,
  delay = 1000,
  wTrailing = true
): T => {
  const shouldWait = useRef(false);
  const latestArgs = useRef<unknown[]>([]);

  if (!wTrailing) {
    return ((...args: Parameters<T>) => {
      if (shouldWait.current) return;

      cb(...args);
      shouldWait.current = true;

      setTimeout(() => {
        shouldWait.current = false;
      }, delay);
    }) as T;
  } else {
    const timeoutF = () => {
      if (latestArgs.current.length === 0) {
        shouldWait.current = false;
      } else {
        cb(...latestArgs.current);
        latestArgs.current = [];
        setTimeout(timeoutF, delay);
      }
    };

    return ((...args: Parameters<T>) => {
      if (shouldWait.current) {
        latestArgs.current = args;
        return;
      }

      cb(...args);
      shouldWait.current = true;

      setTimeout(timeoutF, delay);
    }) as T;
  }
};

export default useThrottle;
