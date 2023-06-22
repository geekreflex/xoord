import { styled } from 'styled-components';
import FontSelect from './FontSelect';
import { TextBoldIcon, TextItalicIcon, TextUnderlineIcon } from '@/icons';
import TextStyleAlgin from './TextStyleAlign';
import FontBIU from './FontBIU';
import NumberInput from './common/NumberInput';

export default function Text() {
  return (
    <Wrap className="prop-wrap">
      <h4>Text</h4>
      <div className="text-wrap-main">
        <div className="font-select-size-wrap">
          <FontSelect />
          <NumberInput value={1} />
        </div>

        <div className="align-style-wrap">
          <FontBIU />
          <TextStyleAlgin />
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .text-wrap-main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .align-style-wrap {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .font-select-size-wrap {
    display: flex;
    gap: 10px;
  }
`;
