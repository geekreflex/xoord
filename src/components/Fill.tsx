import { useAppSelector } from '@/app/hooks';
import { Close2Icon } from '@/icons';
import { styled } from 'styled-components';

export default function Fill() {
  const { object } = useAppSelector((state) => state.editor);
  return (
    <Wrap>
      <p>Fill</p>
      <div className="fill-items">
        <div className="color-sect">
          <div
            className="color-block"
            style={{ backgroundColor: object?.fill as string }}
          ></div>
          <span>{`${object?.fill}`}</span>
        </div>
        <span>
          <Close2Icon />
        </span>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 14px;
  }

  .fill-items {
    display: flex;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 5px;
    width: 70%;
    border-radius: ${(props) => props.theme.radius.small};
    gap: 10px;
    align-items: center;
    justify-content: space-between;

    span {
      display: flex;
      text-transform: uppercase;
      font-size: 14px;
    }
  }

  .color-sect {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .color-block {
    width: 24px;
    height: 24px;
    border-radius: ${(props) => props.theme.radius.small};
    border: 1px solid ${(props) => props.theme.colors.borderColor};
  }
`;
