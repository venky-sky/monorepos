import type { Meta, StoryObj } from '@storybook/react';
import { CoreUi } from './core-ui';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof CoreUi> = {
  component: CoreUi,
  title: 'CoreUi',
};
export default meta;
type Story = StoryObj<typeof CoreUi>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to CoreUi!/gi)).toBeTruthy();
  },
};
