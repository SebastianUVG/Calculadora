import Display from './Display'

export default {
  title: 'Components/Display',
  component: Display,
  argTypes: {
    value: { 
      control: { 
        type: 'text' 
      } 
    }
  }
}

const Template = (args) => <Display {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '0'
}

export const WithNumber = Template.bind({})
WithNumber.args = {
  value: '123456789'
}

export const WithDecimal = Template.bind({})
WithDecimal.args = {
  value: '3.14159'
}

export const NegativeNumber = Template.bind({})
NegativeNumber.args = {
  value: '-12345678'
}

export const ErrorState = Template.bind({})
ErrorState.args = {
  value: 'ERROR'
}