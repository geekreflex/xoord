import { useEffect, useRef } from 'react';

export default function useEventListener(
  eventType: React.ReactEventHandler,
  callback: () => {},
  element: any
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element === null) return;
    const handler = () => callbackRef.current();
    element.addEventListent(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
