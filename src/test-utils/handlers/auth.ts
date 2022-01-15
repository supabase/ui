import { rest, RestHandler } from 'msw'
import { clientUrl } from '../clientDetails'
import {
  createSignInResponse,
  createSignUpResponse,
} from '../data-creators/auth'

type Response = {}

const signInUrl = `${clientUrl}/auth/v1/token`
const signUpUrl = `${clientUrl}/auth/v1/signup`
const signOutUrl = `${clientUrl}/auth/v1/logout`
const magicLinkUrl = `${clientUrl}/auth/v1/magiclink`
const resetPasswordUrl = `${clientUrl}/auth/v1/recover`

export const signInSuccessfulResponse = (
  returnData: Partial<Response> = {}
): RestHandler =>
  rest.post<Response>(signInUrl, (_, res, ctx) =>
    res(
      ctx.json({
        ...createSignInResponse(),
        ...returnData,
      })
    )
  )

export const signInUnsuccessfulResponse = (
  returnData: Partial<Response> = {}
): RestHandler =>
  rest.post<Response>(signInUrl, (_, res, ctx) =>
    res(
      ctx.status(400),
      ctx.json({
        error: 'invalid_grant',
        error_description: 'Invalid login credentials',
        ...returnData,
      })
    )
  )

export const signUpSuccessfulResponse = (
  returnData: Partial<Response> = {}
): RestHandler =>
  rest.post<Response>(signUpUrl, (_, res, ctx) =>
    res(
      ctx.json({
        ...createSignUpResponse(),
        ...returnData,
      })
    )
  )

export const signUpUnsuccessfulResponse = (error: string): RestHandler =>
  rest.post<Response>(signUpUrl, (_, res, ctx) =>
    res(
      ctx.status(422),
      ctx.json({
        msg: error,
      })
    )
  )

export const signOutSuccessfulResponse = (): RestHandler =>
  rest.post<Response>(signOutUrl, (_, res, ctx) => res(ctx.status(200)))

export const magicLinkSuccessfulResponse = (): RestHandler =>
  rest.post<Response>(magicLinkUrl, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  )

export const magicLinkUnsuccessfulResponse = (error: string): RestHandler =>
  rest.post<Response>(magicLinkUrl, (_, res, ctx) =>
    res(
      ctx.status(422),
      ctx.json({
        msg: error,
      })
    )
  )

export const resetPasswordSuccessfulResponse = (): RestHandler =>
  rest.post<Response>(resetPasswordUrl, (_, res, ctx) =>
    res(ctx.status(200), ctx.json({}))
  )

export const resetPasswordUnsuccessfulResponse = (): RestHandler =>
  rest.post<Response>(resetPasswordUrl, (_, res, ctx) =>
    res(ctx.status(404), ctx.json({ code: 404, msg: 'User not found' }))
  )
