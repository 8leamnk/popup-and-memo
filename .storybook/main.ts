import type { StorybookConfig } from '@storybook/nextjs';

// 스토리북에 대한 전반적인 설정
const config: StorybookConfig = {
  // 스토리북에 사용할 .mdx, .stories 파일의 위치
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // 적용할 addon
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-themes'
  ],
  // 프레임워크 종류
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  // docs 관련
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;
