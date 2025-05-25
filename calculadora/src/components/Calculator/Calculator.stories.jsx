import Calculator from './Calculator'
import { within, userEvent } from '@storybook/testing-library'

export default {
  title: 'Components/Calculator',
  component: Calculator,
  parameters: {
    layout: 'centered'
  }
}

const Template = () => <Calculator />

export const Default = Template.bind({})
Default.storyName = 'Calculadora Básica'

export const SumaBasica = Template.bind({})
SumaBasica.storyName = 'Operación: 5 + 3'
SumaBasica.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await userEvent.click(canvas.getByText('5'))
  await userEvent.click(canvas.getByText('+'))
  await userEvent.click(canvas.getByText('3'))
  await userEvent.click(canvas.getByText('='))
}

export const ConDecimal = Template.bind({})
ConDecimal.storyName = 'Operación con Decimales: 2.5 + 1.2'
ConDecimal.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  await userEvent.click(canvas.getByText('2'))
  await userEvent.click(canvas.getByText('.'))
  await userEvent.click(canvas.getByText('5'))
  await userEvent.click(canvas.getByText('+'))
  await userEvent.click(canvas.getByText('1'))
  await userEvent.click(canvas.getByText('.'))
  await userEvent.click(canvas.getByText('2'))
  await userEvent.click(canvas.getByText('='))
}
