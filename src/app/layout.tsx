import ReduxProvider from '@/provider';
import StyledComponentsRegistry from '@/lib/registry';
import Theme from '@/style/Theme';
import History from '@/components/Atoms/History';
import Header from '@/components/Organisms/Header';
import Popup from '@/components/Molcules/Popup';
import Main from '@/components/Molcules/Main';

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
            <Theme>
              <History />
              <Header />
              <Main>{children}</Main>
              <Popup />
            </Theme>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
