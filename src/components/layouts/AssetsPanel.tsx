import { styled } from 'styled-components';
import Panel from '../common/Panel';

export default function AssetsPanel() {
  return (
    <Panel title="Assets" placement="left" offset={85}>
      <Wrap></Wrap>
    </Panel>
  );
}

const Wrap = styled.div`
  padding: 0 10px;
`;
