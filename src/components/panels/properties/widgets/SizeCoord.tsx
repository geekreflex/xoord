import Icon from '@/components/common/Icon';
import { Input } from '@/components/common/Input';
import { DividerX, Title } from '@/styles/global';
import { styled } from 'styled-components';

export default function SizeCoord() {
  return (
    <SizeCoordWrap>
      <Title>Size & Coords</Title>
      <DividerX />
      <div className="main">
        <div className="size wrap-group">
          <Input
            value={''}
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            }}
            sin={'W'}
          />
          <Input
            value={''}
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            }}
            sin={'H'}
          />
          <button className="lock btn-numb">
            <Icon name="unlockIcon" hover={false} size="small" />
          </button>
        </div>
        <div className="coord wrap-group">
          <Input
            value={''}
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            }}
            sin={'X'}
          />
          <Input
            value={''}
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            }}
            sin={'Y'}
          />
          <Input
            value={''}
            onChange={function (e: any): void {
              throw new Error('Function not implemented.');
            }}
            sin={'R'}
          />
        </div>
      </div>
    </SizeCoordWrap>
  );
}

const SizeCoordWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  .main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .wrap-group {
    display: flex;
    gap: 10px;
  }

  .btn-numb {
    width: 33%;
    border: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${(props) => props.theme.radius.medium};
    font-size: 13px;
    cursor: pointer;
  }
`;
