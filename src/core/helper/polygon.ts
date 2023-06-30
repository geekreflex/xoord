import { fabric } from 'fabric';

export const getInsetDepth = (
  points: fabric.Point[],
  corners: number,
  size: number
): number => {
  // Calculate the average distance between adjacent points
  const distances: number[] = [];
  for (let i = 0; i < corners; i++) {
    const current = points[i];
    const next = points[(i + 1) % corners];
    const distance = Math.hypot(next.x - current.x, next.y - current.y);
    distances.push(distance);
  }
  const avgDistance =
    distances.reduce((sum, distance) => sum + distance, 0) / corners;

  // Calculate the initial inset depth as the difference between the average distance and half the polygon size
  const initialInset = size / 2 - avgDistance / 2;
  return initialInset;
};
