import { ArrowDownIcon } from '@/icons';
import { styled } from 'styled-components';

export default function Option() {
  return (
    <Wrap>
      <div>
        <button className="font-select btn-text-arrow">
          <span>Twitter Post</span>
          <span className="arrow">
            <ArrowDownIcon />
          </span>
        </button>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div``;
