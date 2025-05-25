import Display from './Display';

export default {
  title: 'Components/Display',
  component: Display,
  argTypes: {
    value: { control: 'number' }
  }
};

const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 0
};

export const Positive = Template.bind({});
Positive.args = {
  value: 42
};

export const Negative = Template.bind({});
Negative.args = {
  value: -10
};