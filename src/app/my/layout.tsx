import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page',
  description: 'Popup Implementation Walkthrough',
};

function MyPageLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default MyPageLayout;
