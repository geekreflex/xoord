import { styled } from 'styled-components';

export default function Popup({
  children,
  placement = 'bottom',
  offset = 50,
}: {
  children: React.ReactNode;
  placement?: string;
  offset?: number;
}) {
  return (
    <Wrap placement={placement} offset={offset}>
      {children}
    </Wrap>
  );
}

interface WrapProps {
  placement: string;
  offset: number;
}

const Wrap = styled.div<WrapProps>`
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  position: absolute;
  bottom: ${(props) =>
    props.placement === 'bottom' ? `${props.offset}px` : 'auto'};
  top: ${(props) => (props.placement === 'top' ? `${props.offset}px` : 'auto')};
  padding: 5px 0;
  border-radius: ${(props) => props.theme.radius.medium};
  box-shadow: ${(props) => props.theme.shadow.shadow1};
  z-index: 99;
`;
