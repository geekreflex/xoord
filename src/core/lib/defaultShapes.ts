export const STROKE = '#000000';
export const FILL = '#e8e8e8';
export const WIDTH = 300;
export const HEIGHT = 300;
export const STROKE_WIDTH = 3;
export const STROKE_UNIFORM = true;

const defaultProps = {
  fill: FILL,
  stroke: STROKE,
  strokeWidth: STROKE_WIDTH,
  strokeUniform: STROKE_UNIFORM,
  angle: 0,
  left: 0,
  top: 0,
  locked: false,
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
