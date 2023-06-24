import { ArrowRightIcon } from '@/icons';
import { styled } from 'styled-components';
import NumberInput from './common/NumberInput';
import FontBIU from './FontBIU';
import TextStyleAlgin from './TextStyleAlign';
import Fill from './Fill';
import ObjectOptions from './ObjectOptions';

export default function Text() {
  return (
    <Wrap className="prop-wrap">
      <h4>Text</h4>
      <div className="main-wrap">
        <div className="main-font-props">
          <button className="font-select btn-text-arrow">
            <span>Darker Grotesque</span>
            <span className="arrow">
              <ArrowRightIcon />
            </span>
          </button>
        </div>
        <div className="size-color-wrap">
          <div className="font-size-wrap">
            <NumberInput value={1} />
          </div>
          <div className="fill-wrap">
            <Fill />
          </div>
          <div className="font-spacing"></div>
        </div>
        <div className="align-biu-wrap">
          <div className="bui-wrap">
            <FontBIU />
          </div>
          <div className="style-align-wrap">
            <TextStyleAlgin />
          </div>
        </div>

        <ObjectOptions />
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  gap: 10px;

  .main-wrap {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .size-color-wrap {
    display: flex;
    gap: 5px;

    .font-size-wrap {
      width: 65%;
    }

    .color-block {
      width: 32px;
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      border-radius: ${(props) => props.theme.radius.small};
    }

    .font-spacing {
      width: 35px;
      border: 1px solid ${(props) => props.theme.colors.borderColor};
      border-radius: ${(props) => props.theme.radius.small};
    }
  }

  .align-biu-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;

    .style-align-wrap {
      width: 60%;
    }
  }
`;
