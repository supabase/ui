import React from 'react'
import { Provider } from 'theme-provider'

export const ThemeDecorator = (getStory) => (
  <Provider>adsdasds{getStory()}</Provider>
)
