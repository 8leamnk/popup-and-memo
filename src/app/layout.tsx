import ReduxProvider from '@/provider';
import StyledComponentsRegistry from '@/lib/registry';
import Theme from '@/style/Theme';
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
            <Theme>
              <History />
              <Header />
              <main>{children}</main>
              <Popup />
            </Theme>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
