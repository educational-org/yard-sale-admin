import '@styles/tailwind.css';
import MainLayout from '@layout/MainLayout';
import { ProviderAuth } from '@hooks/useAuth'; //este es el Context de Autenticación usuario Login
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  )
}

