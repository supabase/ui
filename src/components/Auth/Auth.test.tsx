import { act, render as rtlRender, screen } from '@testing-library/react'
import Auth, { buttonStyles, Props, VIEWS } from './Auth'
import { createClient, Provider } from '@supabase/supabase-js'
import {
  clientUrl,
  clientKey,
  correctEmailAddress,
  correctPassword,
} from '../../test-utils/clientDetails'
import { setupMockServer } from '../../test-utils/mockServer'
import {
  magicLinkSuccessfulResponse,
  magicLinkUnsuccessfulResponse,
  resetPasswordSuccessfulResponse,
  resetPasswordUnsuccessfulResponse,
  signInSuccessfulResponse,
  signInUnsuccessfulResponse,
  signUpSuccessfulResponse,
  signUpUnsuccessfulResponse,
} from '../../test-utils/handlers/auth'
import userEvent from '@testing-library/user-event'
import type { FC } from 'react'

const { mockServer } = setupMockServer()

const Container: FC = ({ children }) => {
  const { user } = Auth.useUser()
  if (user) return <p>Signed in</p>
  return <>{children}</>
}

const supabase = createClient(clientUrl, clientKey)

const allSocialProviders: Provider[] = [
  'apple',
  'azure',
  'bitbucket',
  'discord',
  'facebook',
  'github',
  'gitlab',
  'google',
  'twitch',
  'twitter',
]

const render = (props: Partial<Props> = {}) => {
  return rtlRender(
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Container>
        <Auth supabaseClient={supabase} {...props} />
      </Container>
    </Auth.UserContextProvider>
  )
}

beforeEach(() => {
  // Unfortunately I can't find a better way to clean up the auth state
  supabase.auth.signOut()
})

describe('#Auth', () => {
  describe('email auth view', () => {
    describe('sign in', () => {
      describe('without any details', () => {
        it('renders Sign In view', () => {
          render()

          expect(
            screen.getByRole('textbox', { name: /email address/i })
          ).toBeInTheDocument()
          expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
          expect(
            screen.getByRole('checkbox', { name: /remember me/i })
          ).toBeInTheDocument()
          expect(
            screen.getByRole('link', { name: /forgot your password?/i })
          ).toBeInTheDocument()
          expect(
            screen.getByRole('button', { name: /sign in/i })
          ).toBeInTheDocument()
          expect(
            screen.getByRole('link', {
              name: /don't have an account\? sign up/i,
            })
          ).toBeInTheDocument()
        })

        it('does not allow to submit the form and shows the correct error message', async () => {
          render()

          userEvent.click(screen.getByRole('button', { name: /sign in/i }))

          expect(
            await screen.findByText(
              /you must provide either an email, phone number or a third-party provider./i
            )
          )
        })
      })

      describe('with correct details', () => {
        it('allows to sign in', async () => {
          mockServer.use(signInSuccessfulResponse())
          render()

          userEvent.type(
            screen.getByRole('textbox', {
              name: /email address/i,
            }),
            correctEmailAddress
          )
          userEvent.type(screen.getByLabelText(/password/i), correctPassword)
          userEvent.click(screen.getByRole('button', { name: /sign in/i }))

          expect(await screen.findByText(/signed in/i)).toBeInTheDocument()
        })
      })

      describe('with incorrect details', () => {
        it('shows error message when incorrect email or password is passed', async () => {
          mockServer.use(signInUnsuccessfulResponse())

          render()

          userEvent.type(
            screen.getByRole('textbox', {
              name: /email address/i,
            }),
            'incorrect@test.com'
          )
          userEvent.type(
            screen.getByLabelText(/password/i),
            'incorrectPassword'
          )
          userEvent.click(screen.getByRole('button', { name: /sign in/i }))

          expect(await screen.findByText(/invalid login credentials/i))
        })
      })

      describe('view switch', () => {
        it('allows to switch to Forgotten Password view', () => {
          render()

          userEvent.click(
            screen.getByRole('link', { name: /forgot your password\?/i })
          )
          expect(
            screen.getByRole('button', {
              name: /send reset password instructions/i,
            })
          ).toBeInTheDocument()
        })

        it('allows to switch to Magic Link view', () => {
          render({ magicLink: true })

          userEvent.click(
            screen.getByRole('link', { name: /sign in with magic link/i })
          )
          expect(
            screen.getByRole('button', {
              name: /send magic link/i,
            })
          ).toBeInTheDocument()
        })

        it('allows to switch to Sign Up view', () => {
          render()

          userEvent.click(
            screen.getByRole('link', {
              name: /don't have an account\? sign up/i,
            })
          )
          expect(
            screen.getByRole('button', {
              name: /sign up/i,
            })
          ).toBeInTheDocument()
        })
      })

      it.todo('allows to use Remember me option')
      it.todo('redirects to URL, when "redirectTo" props is passed')
    })

    describe('sign up', () => {
      describe('without any details', () => {
        it('renders Sign Up view', () => {
          render({ view: VIEWS.SIGN_UP })

          expect(
            screen.getByRole('textbox', { name: /email address/i })
          ).toBeInTheDocument()
          expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
          expect(
            screen.getByRole('checkbox', { name: /remember me/i })
          ).toBeInTheDocument()
          expect(
            screen.getByRole('button', { name: /sign up/i })
          ).toBeInTheDocument()
          expect(
            screen.getByRole('link', {
              name: /do you have an account\? sign in/i,
            })
          ).toBeInTheDocument()
        })

        it('shows the correct error message on submit', async () => {
          const message = 'Signup requires a valid password'
          mockServer.use(signUpUnsuccessfulResponse(message))
          render({ view: VIEWS.SIGN_UP })

          userEvent.click(screen.getByRole('button', { name: /sign up/i }))

          expect(await screen.findByText(new RegExp(message, 'i')))
        })
      })

      describe('with correct details', () => {
        it('allows to sign up', async () => {
          mockServer.use(signUpSuccessfulResponse())
          render({ view: VIEWS.SIGN_UP })

          userEvent.type(
            screen.getByRole('textbox', {
              name: /email address/i,
            }),
            correctEmailAddress
          )
          userEvent.type(screen.getByLabelText(/password/i), correctPassword)
          userEvent.click(screen.getByRole('button', { name: /sign up/i }))

          expect(await screen.findByText(/signed in/i)).toBeInTheDocument()
        })
      })

      describe('with incorrect details', () => {
        it('shows error message when incorrect email is passed', async () => {
          const invalidEmail = 'invalid_email'
          const errorMessage =
            'Unable to validate email address: invalid format'
          mockServer.use(signUpUnsuccessfulResponse(errorMessage))

          render({ view: VIEWS.SIGN_UP })

          userEvent.type(
            screen.getByRole('textbox', {
              name: /email address/i,
            }),
            invalidEmail
          )

          userEvent.click(screen.getByRole('button', { name: /sign up/i }))

          expect(await screen.findByText(new RegExp(errorMessage, 'i')))
        })
        it('shows error message when password is not long enough', async () => {
          const shortPassword = 'passs'
          const errorMessage = 'Password should be at least 6 characters'
          mockServer.use(signUpUnsuccessfulResponse(errorMessage))

          render({ view: VIEWS.SIGN_UP })

          userEvent.type(
            screen.getByRole('textbox', {
              name: /email address/i,
            }),
            correctEmailAddress
          )

          userEvent.type(screen.getByLabelText(/password/i), shortPassword)

          userEvent.click(screen.getByRole('button', { name: /sign up/i }))

          expect(await screen.findByText(new RegExp(errorMessage, 'i')))
        })
      })

      describe('view switch', () => {
        it('allows to switch to Sign In view', () => {
          render({ view: VIEWS.SIGN_UP })

          userEvent.click(
            screen.getByRole('link', {
              name: /do you have an account\? sign in/i,
            })
          )

          expect(
            screen.getByRole('button', { name: /sign in/i })
          ).toBeInTheDocument()
        })
      })

      it.todo('allows to use Remember me option')
      it.todo('redirects to URL, when "redirectTo" props is passed')
    })
  })

  describe('social provided auth view', () => {
    it('renders all social providers buttons and and a relevant auth form ', () => {
      render({ providers: allSocialProviders })

      allSocialProviders.forEach((provider) => {
        expect(
          screen.getByRole('button', { name: `Sign up with ${provider}` })
        ).toBeInTheDocument()
      })

      expect(
        screen.getByRole('textbox', { name: /email address/i })
      ).toBeInTheDocument()
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
      expect(
        screen.getByRole('checkbox', { name: /remember me/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /forgot your password?/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /sign in/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', {
          name: /don't have an account\? sign up/i,
        })
      ).toBeInTheDocument()
    })

    it.each(['tiny', 'small', 'medium', 'large', 'xlarge'])(
      'renders social providers buttons in %s size',
      (size) => {
        render({ providers: allSocialProviders, socialButtonSize: size })

        allSocialProviders.forEach((provider) => {
          expect(
            screen.getByRole('button', { name: `Sign up with ${provider}` })
          ).toHaveClass(`sbui-btn--${size}`)
        })
      }
    )

    it('renders social providers buttons with their colours', () => {
      render({ providers: allSocialProviders, socialColors: true })

      allSocialProviders.forEach((provider) => {
        expect(
          screen.getByRole('button', { name: `Sign up with ${provider}` })
        ).toHaveStyle({
          'background-color': buttonStyles[provider].backgroundColor,
          color: buttonStyles[provider].color,
        })
      })
    })

    it('renders only social providers buttons', () => {
      render({ providers: allSocialProviders, onlyThirdPartyProviders: true })

      allSocialProviders.forEach((provider) => {
        expect(
          screen.getByRole('button', { name: `Sign up with ${provider}` })
        ).toBeInTheDocument()
      })

      expect(
        screen.queryByRole('textbox', { name: /email address/i })
      ).not.toBeInTheDocument()
    })
  })

  describe('magic link auth view', () => {
    it('renders magic link view', () => {
      render({ view: VIEWS.MAGIC_LINK })

      expect(
        screen.getByRole('textbox', { name: /email address/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /send magic link/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', {
          name: /sign in with password/i,
        })
      ).toBeInTheDocument()
    })

    it('shows message when magic link was successfully sent', async () => {
      const error = 'Unable to validate email address: invalid format'
      mockServer.use(magicLinkUnsuccessfulResponse(error))
      render({ view: VIEWS.MAGIC_LINK })

      userEvent.type(
        screen.getByRole('textbox', { name: /email address/i }),
        'invalidemail'
      )
      userEvent.click(screen.getByRole('button', { name: /send magic link/i }))

      expect(
        await screen.findByText(new RegExp(error, 'i'))
      ).toBeInTheDocument()
    })

    it('shows an error when invalid email is passed', async () => {
      mockServer.use(magicLinkSuccessfulResponse())
      render({ view: VIEWS.MAGIC_LINK })

      userEvent.type(
        screen.getByRole('textbox', { name: /email address/i }),
        correctEmailAddress
      )
      userEvent.click(screen.getByRole('button', { name: /send magic link/i }))

      expect(
        await screen.findByText(/check your email for the magic link/i)
      ).toBeInTheDocument()
    })

    it('allows to switch to regular Email Auth view', () => {
      render({ view: VIEWS.MAGIC_LINK })

      userEvent.click(
        screen.getByRole('link', {
          name: /sign in with password/i,
        })
      )

      expect(
        screen.getByRole('button', { name: /sign in/i })
      ).toBeInTheDocument()
    })
  })

  describe('update password view', () => {
    it('renders update password view', () => {
      render({ view: VIEWS.UPDATE_PASSWORD })

      expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /update password/i })
      ).toBeInTheDocument()
      expect(screen.getByText(/new password/i)).toBeInTheDocument()
    })

    // We first need to add a app flow to get to this screen
    it.todo('allows to change the password')

    it('does not allow to change the password when user is not logged in', async () => {
      render({ view: VIEWS.UPDATE_PASSWORD })

      await act(async () => {
        userEvent.type(screen.getByLabelText(/password/i), 'new password')
        userEvent.click(
          screen.getByRole('button', { name: /update password/i })
        )
        expect(await screen.findByText(/not logged in/i)).toBeInTheDocument()
      })
    })
  })

  describe('forgotten password view', () => {
    it('renders forgotten password view', () => {
      render({ view: VIEWS.FORGOTTEN_PASSWORD })

      expect(
        screen.getByRole('textbox', { name: /email address/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('button', {
          name: /send reset password instructions/i,
        })
      ).toBeInTheDocument()
      expect(
        screen.getByRole('link', { name: /go back to sign in/i })
      ).toBeInTheDocument()
    })

    it('allows to reset the password', async () => {
      mockServer.use(resetPasswordSuccessfulResponse())
      render({ view: VIEWS.FORGOTTEN_PASSWORD })

      userEvent.type(
        screen.getByRole('textbox', { name: /email address/i }),
        correctEmailAddress
      )

      userEvent.click(
        screen.getByRole('button', {
          name: /send reset password instructions/i,
        })
      )

      expect(
        await screen.findByText(/check your email for the password reset link/i)
      ).toBeInTheDocument()
    })

    it('renders error when user cannot be found', async () => {
      mockServer.use(resetPasswordUnsuccessfulResponse())
      render({ view: VIEWS.FORGOTTEN_PASSWORD })

      userEvent.type(
        screen.getByRole('textbox', { name: /email address/i }),
        'incorrect@email.com'
      )

      userEvent.click(
        screen.getByRole('button', {
          name: /send reset password instructions/i,
        })
      )

      expect(await screen.findByText(/user not found/i)).toBeInTheDocument()
    })
  })
})
