import { styled } from 'styled-components';
import Editor from './components/Editor';
import Providers from './context';
import GlobalCSS from './styles/global';
import View from './View';

export default function App() {
  return (
    <Wrap>
      <Providers>
        <GlobalCSS />
        {/* <Editor /> */}
        <View />
      </Providers>
    </Wrap>
  );
}

const Wrap = styled.div``;
