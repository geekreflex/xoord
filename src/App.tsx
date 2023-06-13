import { styled } from 'styled-components';
import Editor from './components/Editor';

export default function App() {
  return (
    <Wrap>
      <Editor />
    </Wrap>
  );
}

const Wrap = styled.div``;
