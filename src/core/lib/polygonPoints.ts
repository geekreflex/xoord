/**
 *
 * @param sideCount the number of sides number
 * @param radius the radius
 * @returns [points]
 */

export function regularPolygonPoints(
  sideCount: number,
  radius: number
): { x: number; y: number }[] {
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

/**
 *
 * @param spikeCount the number of spikes
 * @param outerRadius the outer roundness
 * @param innnerRadius the innner roundness
 * @returns the points
 */

export function starPolygonPoints(
  spikeCount: number,
  outerRadius: number,
  innnerRadius: number
): { x: number; y: number }[] {
  // const rot = (Math.PI / 2) * 3;
  const cx = outerRadius;
  const cy = outerRadius;
  const sweep = Math.PI / spikeCount;
  const points = [];
  let angle = 0;

  for (let i = 0; i < spikeCount; i++) {
    let x = cx + Math.cos(angle) * outerRadius;
    let y = cy + Math.sin(angle) * outerRadius;
    points.push({ x, y });
    angle += sweep;

    x = cx + Math.cos(angle) * innnerRadius;
    y = cy + Math.sin(angle) * innnerRadius;
    points.push({ x, y });
    angle += sweep;
  }

  return points;
}
