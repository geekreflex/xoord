import { Tab } from './tab';

interface TabCompProps {
  tab: Tab;
  active: boolean;
  onClick: () => void;
  onClose: () => void;
}

export default function TabComp({
  tab,
  active,
  onClick,
  onClose,
}: TabCompProps) {
  return (
    <div className={`tab${active ? ' active' : ''}`} onClick={onClick}>
      {tab.getName()}
      <button onClick={onClose}>x</button>
    </div>
  );
}
