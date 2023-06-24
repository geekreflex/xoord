import { ArrowRightIcon } from '@/icons';
import { styled } from 'styled-components';
import NumberInput from './common/NumberInput';
import FontBIU from './FontBIU';
import TextStyleAlgin from './TextStyleAlign';

export default function Text() {
  return (
    <Wrap className="prop-wrap">
      <div className="main-font-props">
        <div className="font-select">
          <span>Darker Grotesque</span>
          <span className="arr-icon">
            <ArrowRightIcon />
          </span>
        </div>
      </div>
      <div className="size-color-wrap">
        <div className="font-size-wrap">
          <NumberInput value={1} />
        </div>
        <div className="color-block"></div>
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
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  gap: 10px;

  .font-select {
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    border-radius: ${(props) => props.theme.radius.small};
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: ${(props) => props.theme.colors.hoverColor};
    }

    .arr-icon {
      font-size: 12px;
      display: flex;
      path {
        stroke-width: 4px;
      }
    }
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
