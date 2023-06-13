/**
 *
 * @param sideCount the number of sides number
 * @param radius the radius
 * @returns [points]
 */

export const regularPolygonPoints = (
  sideCount: number,
  radius: number
): { x: number; y: number }[] => {
  const vertices = [];
  const interiorAngle = (2 * Math.PI) / sideCount;
  const rotationAdjustment = -Math.PI / 2;

  for (let i = 0; i < sideCount; i++) {
    const angle = i * interiorAngle + rotationAdjustment;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    vertices.push({ x, y });
  }

  return vertices;
};

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
  const cx = outerRadius;
  const cy = outerRadius;
  const sweep = (2 * Math.PI) / (spikeCount * 2);
  const points: { x: number; y: number }[] = [];
  let angle = -Math.PI / 2 + sweep; // Initial rotation adjustment

  for (let i = 0; i < spikeCount * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innnerRadius;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    points.push({ x, y });
    angle += sweep;
  }

  return points;
}
