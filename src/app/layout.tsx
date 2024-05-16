import { Metadata } from 'next';
import AuthProvider from '@/provider/AuthProvider';
import ReduxProvider from '@/provider/ReduxProvider';
import StyledComponentsRegistry from '@/lib/registry';
import Theme from '@/style/Theme';
import History from '@/components/Organisms/History';
import Header from '@/components/Organisms/Header';
import Main from '@/components/Molcules/Main';
import LoginCheck from '@/components/Organisms/LoginCheck';
import Popup from '@/components/Organisms/Popup';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Popup Implementation Walkthrough',
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <ReduxProvider>
            <StyledComponentsRegistry>
              <Theme>
                <History />
                <Header />
                <Main>{children}</Main>
                <LoginCheck />
                <Popup />
              </Theme>
            </StyledComponentsRegistry>
          </ReduxProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

export default RootLayout;
