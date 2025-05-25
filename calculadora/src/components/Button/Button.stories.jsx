import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: { control: 'text' }
  }
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me'
};

export const Sumar = Template.bind({});
Sumar.args = {
  children: 'Sumar'
};

export const Restar = Template.bind({});
Restar.args = {
  children: 'Restar'
};