import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';


const meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Button',
    },
} satisfies Meta<typeof Button>;


export default meta;

type Story = StoryObj<typeof Button>;


export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};


export const Disabled: Story = {
    args: {
        isDisabled: true,
    },
};
