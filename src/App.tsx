import Stage from './components/Stage';
import Providers from './context';
import GlobalCSS from './styles/global';

export default function App() {
  return (
    <>
      <Providers>
        <GlobalCSS />
        <Stage />
      </Providers>
    </>
  );
}
