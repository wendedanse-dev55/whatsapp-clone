import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';


const meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    args: {
        size: 'extra-small',
    },
} satisfies Meta<typeof Loader>;


export default meta;

type Story = StoryObj<typeof Loader>;
export const LoaderExtraSmall: Story = {
    args: {
        size: 'extra-small',
    },
};

export const LoaderSmall: Story = {
    args: {
        size: 'small',
    },
};

export const LoaderMedium: Story = {
    args: {
        size: 'medium',
    },
};

export const LoaderLarge: Story = {
    args: {
        size: 'large',
    },
};


