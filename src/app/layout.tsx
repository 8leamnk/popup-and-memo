import ReduxProvider from '@/provider';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/style/GlobalStyle';
import History from '@/components/History';
import Header from '@/components/Header';
import Popup from '@/components/Popup';

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <History />
            <Header />
            <main>{children}</main>
            <Popup />
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
