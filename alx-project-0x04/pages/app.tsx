import { AppProps } from 'next/app';
import { UserProvider } from '../context/UserContext';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
);

export default MyApp;