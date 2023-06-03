export const STROKE = '#000000';
export const FILL = '#e8e8e8';
export const WIDTH = 300;
export const HEIGHT = 300;
export const STROKE_WIDTH = 10;
export const STROKE_UNIFORM = false;

const defaultProps = {
  fill: FILL,
  stroke: STROKE,
  strokeWidth: STROKE_WIDTH,
  strokeUniform: STROKE_UNIFORM,
  angle: 0,
  // left: 50,
};

const defaultSize = {
  width: WIDTH,
  height: HEIGHT,
};

export const CIRCLE = {
  ...defaultProps,
  radius: WIDTH / 2,
};

export const RECTANGLE = {
  ...defaultProps,
  ...defaultSize,
  width: defaultSize.width + 100,
};

export const SQUARE = {
  ...defaultProps,
  ...defaultSize,
};

export const TRIANGLE = {
  ...defaultProps,
  ...defaultSize,
};

export const POLYGON = {
  ...defaultProps,
  ...defaultSize,
};
