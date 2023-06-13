import { styled } from 'styled-components';
import Editor from './components/Editor';
import Providers from './context';

export default function App() {
  return (
    <Wrap>
      <Providers>
        <Editor />
      </Providers>
    </Wrap>
  );
}

const Wrap = styled.div``;
