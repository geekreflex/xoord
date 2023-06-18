import { styled } from 'styled-components';
import ToggleSwitch from './ToggleSwitch';

interface ExpanderProps {
  children: React.ReactNode;
  checked: boolean;
  onChange: () => {};
  label?: string;
}

export default function Expander({
  children,
  checked,
  onChange,
  label = 'Untitled',
}: ExpanderProps) {
  return (
    <Wrap>
      <div className="expand-block">
        <div className="expand-block-content">
          <ToggleSwitch checked={checked} onChange={onChange} />
          <p>{label}</p>
        </div>
      </div>
      <div className="expand-view">{children}</div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .expand-block {
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    height: 35px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: ${(props) => props.theme.radius.medium};

    .expand-block-content {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .expand-view {
    padding: 5px;
  }
`;
