import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Popup Implementation Walkthrough',
};

function AboutLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

export default AboutLayout;
