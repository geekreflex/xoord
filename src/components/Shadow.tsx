import { styled } from 'styled-components';
import Expander from './common/Expander';
import { useState } from 'react';

export default function Shadow() {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {};
  return (
    <Expander
      checked={checked}
      onChange={handleChange}
      onAdd={() => {}}
      label="Shadow"
    >
      <Wrap>
        <p>Shadow stuff</p>
      </Wrap>
    </Expander>
  );
}

const Wrap = styled.div``;
