import { useEffect, useRef } from 'react';

type EventListener = (event: Event) => void;

export default function useEventListener(
  eventType: string,
  callback: EventListener,
  element: EventTarget = window
) {
  const callbackRef = useRef<EventListener>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element === null) return;
    const handler = (e: any) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}
