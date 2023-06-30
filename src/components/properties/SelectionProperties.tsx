import { styled } from 'styled-components';
import ObjectOptions from '../MoreAction';
import { Button } from '@/styles/global';
import { AiOutlineGroup } from 'react-icons/ai';

export default function SelectionProperties() {
  return (
    <Wrap>
      <div className="btn-wrap">
        <Button>
          <span id="btn-icon">
            <AiOutlineGroup />
          </span>
          <span id="btn-text">Group</span>
        </Button>
      </div>
      <ObjectOptions />
    </Wrap>
  );
}

const Wrap = styled.div``;
