import { styled } from 'styled-components';
import Circle from '@/assets/shapes/circle.png';
import Square from '@/assets/shapes/square.png';
import Triangle from '@/assets/shapes/triangle.png';
import Polygon from '@/assets/shapes/polygon.png';
import Star from '@/assets/shapes/star.png';
import Line from '@/assets/shapes/line.png';
import { IoText } from 'react-icons/io5';

interface LayerPreviewProps {
  obj: fabric.Object;
}

export default function LayerPreview({ obj }: LayerPreviewProps) {
  const renderPreview = () => {
    switch (obj.name) {
      case 'image':
        return <img src={(obj.toJSON() as any).src} />;
      case 'circle':
        return <img src={Circle} />;
      case 'star':
        return <img src={Star} />;
      case 'triangle':
        return <img src={Triangle} />;
      case 'rectangle':
        return <img src={Square} />;
      case 'regpoly':
        return <img src={Polygon} />;
      case 'line':
        return <img src={Line} />;
      case 'text':
        return <IoText />;
    }
  };

  return <Wrap>{renderPreview()}</Wrap>;
}

const Wrap = styled.div`
  width: 30px;
  height: 30px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 4px;
  }
`;
