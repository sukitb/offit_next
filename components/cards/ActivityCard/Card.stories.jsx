import Card from './Card';
import { mockCardProps } from './Card.mocks';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'templates/Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCardProps.base,
};
