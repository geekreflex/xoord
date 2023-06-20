import { styled } from 'styled-components';
import Panel from '../common/Panel';

export default function PropertiesPanel() {
  return (
    <Panel title="Properties" placement="right" offset={20}>
      <Wrap></Wrap>
    </Panel>
  );
}

const Wrap = styled.div``;
