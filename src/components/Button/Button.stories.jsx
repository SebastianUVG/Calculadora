import Button from './Button'
import './Button.css' 

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: { control: 'text' },
    type: { 
      control: { 
        type: 'select',
        options: ['number', 'operation', 'special'] 
      }
    }
  },
}

const Template = (args) => <Button {...args} />

export const NumberButton = Template.bind({})
NumberButton.args = {
  children: '7',
  type: 'number'
}

export const OperationButton = Template.bind({})
OperationButton.args = {
  children: '+',
  type: 'operation'
}

export const SpecialButton = Template.bind({})
SpecialButton.args = {
  children: 'C',
  type: 'special'
}

export const ZeroButton = Template.bind({})
ZeroButton.args = {
  children: '0',
  type: 'number'
}