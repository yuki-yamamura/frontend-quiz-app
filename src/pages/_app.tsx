import type { AppProps } from 'next/app';

import '@unocss/reset/tailwind.css';
import '@/styles/globals.scss';

if (process.env.NODE_ENV === 'development' && typeof window === 'undefined') {
  void import('@/mocks/server').then(({ server }) => server.listen());
}

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
