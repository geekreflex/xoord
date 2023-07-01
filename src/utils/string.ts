export const renderTitle = (name: string | undefined) => {
  if (
    name === 'circle' ||
    name === 'triangle' ||
    name === 'rect' ||
    name === 'polygon'
  ) {
    return 'Shape';
  }

  if (name === 'group') {
    return 'Group';
  }

  if (name === 'line') {
    return 'Line';
  }

  if (name === 'image') {
    return 'Image';
  }

  return 'Undefined';
};
