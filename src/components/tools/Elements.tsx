import { styled } from 'styled-components';

const shapes = [
  { name: 'Circle' },
  { name: 'Triangle' },
  { name: 'Rectangle' },
  { name: 'Square' },
];

export default function Elements() {
  return (
    <Wrap>
      <div className="items wrap">
        <h3>Shapes</h3>
        <div className="item-list">
          {shapes.map((item, index) => (
            <div className="item" key={index} title={item.name}></div>
          ))}
        </div>
      </div>
    </Wrap>
  );
}

const Wrap = styled.div`
  .items-wrap {
  }
`;
