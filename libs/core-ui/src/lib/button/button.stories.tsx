import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {},
};
