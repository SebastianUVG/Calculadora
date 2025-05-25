import Calculator  from './Calculator'
import { within, userEvent } from '@storybook/testing-library'


export default {
  title: 'Components/Calculator',
  component: Calculator,
  parameters: {
    layout: 'centered',
  },
}

const Template = () => <Calculator />

export const Default = Template.bind({})
Default.storyName = 'Calculadora Default'

export const PerformingOperation = Template.bind({})
PerformingOperation.storyName = 'Realizando Operación'
PerformingOperation.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  
  // Simular operación: 5 + 3
  await userEvent.click(canvas.getByText('5'))
  await userEvent.click(canvas.getByText('+'))
  await userEvent.click(canvas.getByText('3'))
}

export const ShowingError = Template.bind({})
ShowingError.storyName = 'Mostrando Error'
ShowingError.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  
  // Simular operación que da error: 999999999 + 1
  await userEvent.click(canvas.getByText('9'))
  await userEvent.click(canvas.getByText('9'))
  await userEvent.click(canvas.getByText('9'))
  await userEvent.click(canvas.getByText('9'))
  await userEvent.click(canvas.getByText('9'))
  await userEvent.click(canvas.getByText('9'))
  await userEvent.click(canvas.getByText('9'))
  await userEvent.click(canvas.getByText('9'))
  await userEvent.click(canvas.getByText('9'))
  await userEvent.click(canvas.getByText('+'))
  await userEvent.click(canvas.getByText('1'))
  await userEvent.click(canvas.getByText('='))
}

export const WithDecimal = Template.bind({})
WithDecimal.storyName = 'Con Decimales'
WithDecimal.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  
  // Simular operación: 2.5 + 3.1
  await userEvent.click(canvas.getByText('2'))
  await userEvent.click(canvas.getByText('.'))
  await userEvent.click(canvas.getByText('5'))
  await userEvent.click(canvas.getByText('+'))
  await userEvent.click(canvas.getByText('3'))
  await userEvent.click(canvas.getByText('.'))
  await userEvent.click(canvas.getByText('1'))
}