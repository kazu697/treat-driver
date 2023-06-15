import { Meta, StoryObj } from '@storybook/react';
import { DealCard } from './Card';

const meta: Meta<typeof DealCard> = {
  title: 'DealCard',
  component: DealCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DealCard>;

export const Primary: Story = {};
