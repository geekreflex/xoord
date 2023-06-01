import { styled } from 'styled-components';

interface GroupCardProps {
  title: string;
  children: React.ReactNode;
}

export default function GroupCard({ title, children }: GroupCardProps) {
  return (
    <GroupCardWrap>
      <h4>{title || 'Untitled'}</h4>
      <GroupCardMain>{children}</GroupCardMain>
    </GroupCardWrap>
  );
}

const GroupCardWrap = styled.div``;
const GroupCardMain = styled.div``;
