import { ThemeDecorator } from './ThemeDecorator'

addDecorator(withKnobs) // inbuilt storybook addon decorator
addDecorator(ThemeDecorator) // custom decorator

configure(() => {
  loadStories()
}, module)
