import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CardCircleItemsContainer from "../CardCircleItemsContainer"
import Card from '../Card';

export default {
  title: 'Example/CardCircleItemsContainer',
  component: CardCircleItemsContainer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CardCircleItemsContainer>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

// interface CardProps {
//   items: number[]
//   selectedItem: number
//   onItemSelected: (item:number) => void
// }

export const someNums = Template.bind({});
someNums.args = {
  items: [1, 2, 3, 4, 5, 6, 7, 8],
  // cardHeight: 400,
  // cardWidth: 400,
};