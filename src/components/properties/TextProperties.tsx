import {
  TextAlignCenterIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@/icons';
import TextAlignJustify from '@/icons/TextAlignJustify';
import { styled } from 'styled-components';

export default function TextProperties() {
  return (
    <Wrap>
      <p>from text</p>
      <div className="text-align-wrap">
        <span>
          <TextAlignLeftIcon />
        </span>
        <span>
          <TextAlignCenterIcon />
        </span>
        <span>
          <TextAlignRightIcon />
        </span>
        <span>
          <TextAlignJustify />
        </span>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  .text-align-wrap {
    display: flex;
    gap: 5px;
    span {
      width: 40px;
      height: 40px;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid red;
      cursor: pointer;
    }
  }
`;
