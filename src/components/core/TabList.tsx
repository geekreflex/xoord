import { styled } from 'styled-components';
import { Tab } from './Main';

export default function TabList({ tabs }: { tabs: Tab[] }) {
  return (
    <Wrap>
      {tabs.map((tab) => (
        <button key={tab.id}>{tab.title}</button>
      ))}
    </Wrap>
  );
}

const Wrap = styled.div``;
