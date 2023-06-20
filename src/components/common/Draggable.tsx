import { useEffect, useRef, MouseEvent } from 'react';
import { styled } from 'styled-components';

interface DraggableProps {
  children: React.ReactNode;
}

export default function Draggable({ children }: DraggableProps) {
  const draggableRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);
  const offset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
    if (draggableRef.current) {
      const { left, top } = draggableRef.current.getBoundingClientRect();
      const { clientX, clientY } = event;

      offset.current = {
        x: clientX - left,
        y: clientY - top,
      };

      isDragging.current = true;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging.current && draggableRef.current) {
      const { clientX, clientY } = event;

      draggableRef.current.style.left = `${clientX - offset.current.x}px`;
      draggableRef.current.style.top = `${clientY - offset.current.y}px`;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', () => handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', () => handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <Wrap
      ref={draggableRef}
      onMouseDown={handleMouseDown}
      style={{ position: 'absolute' }}
    >
      {children}
    </Wrap>
  );
}

const Wrap = styled.div``;
