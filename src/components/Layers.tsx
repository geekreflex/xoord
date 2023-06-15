import { styled } from 'styled-components';
import Popup from './shared/Popup';

export default function Layers() {
  /**
   *
   * Don't forget to use iPhone tab style
   */
  return (
    <Popup>
      <Wrap>
        <div className="tab">
          <div>Layers</div>
          <div>Groups</div>
        </div>
      </Wrap>
    </Popup>
  );
}

const Wrap = styled.div``;
