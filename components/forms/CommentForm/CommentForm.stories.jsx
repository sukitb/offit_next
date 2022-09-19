import CommentForm from './CommentForm';
import { mockCommentFormProps } from './CommentForm.mocks';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'templates/CommentForm',
  component: CommentForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CommentForm {...args} />;

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCommentFormProps.base,
};
