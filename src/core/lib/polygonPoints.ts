/**
 *
 * @param sideCount the number of sides number
 * @param radius the radius
 * @returns [points]
 */

export function regularPolygonPoints(sideCount: number, radius: number) {
  const sweep = (Math.PI * 2) / sideCount;
  const cx = radius;
  const cy = radius;
  const points = [];

  for (let i = 0; i < sideCount; i++) {
    const x = cx + radius * Math.cos(i * sweep);
    const y = cy + radius * Math.sin(i * sweep);
    points.push({ x, y });
  }
  return points;
}
