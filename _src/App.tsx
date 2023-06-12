import Layout from './components/Layout';
import Providers from './context';
import GlobalCSS from './styles/global';

export default function App() {
  return (
    <>
      <Providers>
        <GlobalCSS />
        <Layout />
      </Providers>
    </>
  );
}
