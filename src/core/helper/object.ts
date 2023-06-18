import { fabric } from 'fabric';

export const isObjectLocked = (
  object: fabric.Object & fabric.Textbox
): boolean | undefined => {
  return (
    object.lockMovementX ||
    object.lockMovementY ||
    object.lockRotation ||
    object.lockScalingX ||
    object.lockScalingY
  );
};
