import type { Metadata } from 'next';
import ReduxProvider from '@/provider';
import StyledComponentsRegistry from '@/lib/registry';
import GlobalStyle from '@/style/GlobalStyle';
import History from '@/components/History';

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
        <ReduxProvider>
          <StyledComponentsRegistry>
            <GlobalStyle />
            <History />
            <main>{children}</main>
          </StyledComponentsRegistry>
        </ReduxProvider>
      </body>
    </html>
  );
}

export default RootLayout;
