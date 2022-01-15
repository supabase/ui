import { setupServer } from 'msw/node'

import type { SetupServerApi } from 'msw/node'
import { signOutSuccessfulResponse } from './handlers/auth'

type Input = Parameters<typeof setupServer>

type Output = {
  mockServer: SetupServerApi
}

const defaultHandlers = [signOutSuccessfulResponse()]

export const setupMockServer = (...handlers: Input): Output => {
  const mockServer = setupServer(...defaultHandlers, ...handlers)

  beforeAll(() =>
    mockServer.listen({
      onUnhandledRequest: 'error',
    })
  )

  beforeEach(() => {
    mockServer.resetHandlers()
  })

  afterAll(() => mockServer.close())

  return { mockServer }
}
