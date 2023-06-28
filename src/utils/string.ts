export const renderTitle = (name: string | undefined) => {
  if (
    name === 'circle' ||
    name === 'triangle' ||
    name === 'rectangle' ||
    name === 'polygon'
  ) {
    return 'Shape';
  }

  if (name === 'image') {
    return 'Image';
  }

  return 'Undefined';
};
