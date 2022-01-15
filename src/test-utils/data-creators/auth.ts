export interface AuthResponse {
  access_token: string
  token_type: string
  expires_in: number
  refresh_token: string
  user: User
}

export type SignInResponse = AuthResponse

export type SignUpResponse = AuthResponse

export interface User {
  id: string
  aud: string
  role: string
  email: string
  email_confirmed_at: string
  phone: string
  confirmed_at: string
  last_sign_in_at: string
  app_metadata: AppMetadata
  user_metadata: Record<string, unknown>
  identities: any[]
  created_at: string
  updated_at: string
}

export interface AppMetadata {
  provider: string
  providers: string[]
}

export const createUser = (overrides?: Partial<User>): User => ({
  id: 'b9a5a7f6-24ca-414d-afa4-c9916ca100c6',
  aud: 'authenticated',
  role: 'authenticated',
  email: 'correct@test.com',
  email_confirmed_at: '2021-11-14T15:01:58.124968Z',
  phone: '',
  confirmed_at: '2021-11-14T15:01:58.124968Z',
  last_sign_in_at: '2021-11-14T15:02:12.026175454Z',
  app_metadata: { provider: 'email', providers: ['email'] },
  user_metadata: {},
  identities: [],
  created_at: '2021-11-14T15:01:58.113652Z',
  updated_at: '2021-11-14T15:02:12.027069Z',
  ...overrides,
})

export const createSignInResponse = (
  overrides?: Partial<SignInResponse>
): SignInResponse => ({
  access_token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjM2OTA1NzMyLCJzdWIiOiJiOWE1YTdmNi0yNGNhLTQxNGQtYWZhNC1jOTkxNmNhMTAwYzYiLCJlbWFpbCI6ImNvcnJlY3RAdGVzdC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQifQ.IAkjPj9Kg3664IGHINiLaGLDSGo1PiogSeyg00lgF9Q',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'MeBvlj9htpSy6HUM7BhNew',
  user: createUser(),
  ...overrides,
})

export const createSignUpResponse = (
  overrides?: Partial<SignUpResponse>
): SignUpResponse => ({
  access_token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjM2OTA1NzMyLCJzdWIiOiJiOWE1YTdmNi0yNGNhLTQxNGQtYWZhNC1jOTkxNmNhMTAwYzYiLCJlbWFpbCI6ImNvcnJlY3RAdGVzdC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQifQ.IAkjPj9Kg3664IGHINiLaGLDSGo1PiogSeyg00lgF9Q',
  token_type: 'bearer',
  expires_in: 3600,
  refresh_token: 'MeBvlj9htpSy6HUM7BhNew',
  user: createUser(),
  ...overrides,
})
