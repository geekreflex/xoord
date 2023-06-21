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

// Helper function to calculate the bounding box of selected objects
export const getBoundingRect = (
  objects: fabric.Object[]
): fabric.Rect | null => {
  if (objects.length === 1) {
    return objects[0].getBoundingRect() as fabric.Rect;
  } else if (objects.length > 1) {
    const group = new fabric.Group(objects);
    const groupBoundingRect = group.getBoundingRect();

    // Calculate the bounding box without modifying the position of the objects
    const left = groupBoundingRect.left - group.left!;
    const top = groupBoundingRect.top - group.top!;
    const width = groupBoundingRect.width;
    const height = groupBoundingRect.height;

    // Create a new fabric.Rect object with the same dimensions as the boundingRect
    const rect = new fabric.Rect({
      left: left,
      top: top,
      width: width,
      height: height,
    });

    return rect;
  }

  return null;
};
