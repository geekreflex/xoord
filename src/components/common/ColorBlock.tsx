import { styled } from 'styled-components';

interface ColorBlockProps {
  onClick: () => void;
  color: string;
}

export default function ColorBlock({ onClick, color }: ColorBlockProps) {
  return (
    <Wrap
      onClick={onClick}
      className="color-block"
      style={{ backgroundColor: color }}
    >
      <span className="color-block-angle"></span>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  width: 32px;
  height: ${(props) => props.theme.resets.btnInputHeight};
  cursor: pointer;
  position: relative;
  border-radius: ${(props) => props.theme.radius.small};

  .color-block-angle {
    position: absolute;
    width: 0;
    height: 0;
    border-bottom: 8px solid transparent;
    border-top: 8px solid transparent;
    border-left: 8px solid ${(props) => props.theme.colors.secondary};
    transform: rotate(45deg);
    right: 2px;
    bottom: -3px;
    display: block;
    filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
  }
`;
