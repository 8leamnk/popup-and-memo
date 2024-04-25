import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Popup Implementation Walkthrough',
};

function AboutLayout({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export default AboutLayout;
