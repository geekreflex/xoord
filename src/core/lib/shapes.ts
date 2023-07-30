export const STROKE = '#444444';
export const FILL = '';
export const WIDTH = 300;
export const HEIGHT = 300;
export const STROKE_WIDTH = 1;
export const STROKE_UNIFORM = true;

const defaultProps = {
  fill: FILL,
  stroke: STROKE,
  strokeWidth: STROKE_WIDTH,
  strokeUniform: STROKE_UNIFORM,
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

export const TRIANGLE = {
  ...defaultProps,
  ...defaultSize,
};

export const POLYGON = {
  ...defaultProps,
  ...defaultSize,
};
