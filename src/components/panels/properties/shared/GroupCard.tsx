import { Divider } from '@/styles/global';
import { styled } from 'styled-components';

interface GroupCardProps {
  title: string;
  children: React.ReactNode;
}

export default function GroupCard({ title, children }: GroupCardProps) {
  return (
    <GroupCardWrap>
      <h4>{title || 'Untitled'}</h4>
      <Divider />
      <GroupCardMain>{children}</GroupCardMain>
    </GroupCardWrap>
  );
}

const GroupCardWrap = styled.div`
  h4 {
    font-size: 14px;
    line-height: 1;
    display: flex;
  }
`;
const GroupCardMain = styled.div``;
