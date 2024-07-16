import { Text } from './Text'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    text: { control: 'text' },
    variant: {
      control: {
        type: 'select',
        options: ['xx-large', 'x-large', 'large', 'medium', 'small'],
      },
    },
    color: {
      control: 'text',
    },
  },
} as Meta

export const Default: StoryObj = {}
