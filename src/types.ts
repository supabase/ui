import type { ValidationMap } from 'prop-types'
import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ComponentType,
  ForwardedRef,
  ReactElement,
  WeakValidationMap,
} from 'react'

export interface AnimationTailwindClasses {
  enter?: string
  enterFrom?: string
  enterTo?: string
  leave?: string
  leaveFrom?: string
  leaveTo?: string
}

export type WithElementProps<
  Type extends keyof JSX.IntrinsicElements | ComponentType,
  Props extends {}
> = Omit<ComponentPropsWithoutRef<Type>, keyof Props> & Props

export type AsPropsWithoutRef<
  InitialType extends keyof JSX.IntrinsicElements | ComponentType,
  Type extends
    | keyof JSX.IntrinsicElements
    | ComponentType
    | undefined = InitialType
> = {
  as?: Type
} & Omit<
  Type extends undefined
    ? ComponentPropsWithoutRef<InitialType>
    : ComponentPropsWithoutRef<Type>,
  'as'
>

export type AsPropsWithRef<
  InitialType extends keyof JSX.IntrinsicElements | ComponentType,
  Type extends
    | keyof JSX.IntrinsicElements
    | ComponentType
    | undefined = InitialType
> = {
  as?: Type
} & Omit<
  Type extends undefined
    ? ComponentPropsWithRef<InitialType>
    : ComponentPropsWithRef<Type>,
  'as'
>
export interface ComponentWithAsProps<
  InitialType extends keyof JSX.IntrinsicElements | ComponentType<any>,
  Props extends {}
> {
  <Type extends keyof JSX.IntrinsicElements>(
    props: {
      as: Type
    } & Props &
      Omit<AsPropsWithoutRef<InitialType, Type>, keyof Props>,
    context?: any
  ): ReactElement<any, any> | null
  <Type extends ComponentType<any>>(
    props: {
      as: Type
    } & Props &
      Omit<AsPropsWithoutRef<InitialType, Type>, keyof Props>,
    context?: any
  ): ReactElement<any, any> | null
  (
    props: {
      as?: InitialType
    } & Props &
      Omit<AsPropsWithoutRef<InitialType, InitialType>, keyof Props>,
    context?: any
  ): ReactElement<any, any> | null
  (
    props: {
      as?: undefined
    } & Props &
      Omit<AsPropsWithoutRef<InitialType, undefined>, keyof Props>,
    context?: any
  ): ReactElement<any, any> | null
  (
    props: Props & Omit<AsPropsWithoutRef<InitialType, undefined>, keyof Props>,
    context?: any
  ): ReactElement<any, any> | null

  propTypes?: WeakValidationMap<
    Props & Omit<AsPropsWithoutRef<InitialType>, keyof Props>
  >
  contextTypes?: ValidationMap<any>
  defaultProps?: Props & Omit<AsPropsWithoutRef<InitialType>, keyof Props>

  displayName?: string
}

export interface RefForwardingComponentWithAsProps<
  InitialType extends keyof JSX.IntrinsicElements | ComponentType<any>,
  Props extends {}
> {
  <Type extends keyof JSX.IntrinsicElements>(
    props: { as: Type } & Props &
      Omit<AsPropsWithRef<InitialType, Type>, keyof Props>,
    ref?: ForwardedRef<Type>
  ): React.ReactElement | null
  <Type extends ComponentType<any>>(
    props: { as: Type } & Props &
      Omit<AsPropsWithRef<InitialType, Type>, keyof Props>,
    ref?: ForwardedRef<Type>
  ): React.ReactElement | null
  (
    props: { as?: InitialType } & Props &
      Omit<AsPropsWithRef<InitialType, InitialType>, keyof Props>,
    ref?: ForwardedRef<InitialType>
  ): React.ReactElement | null
  (
    props: { as?: undefined } & Props &
      Omit<AsPropsWithRef<InitialType, undefined>, keyof Props>,
    ref?: ForwardedRef<InitialType>
  ): React.ReactElement | null
  (
    props: Props & Omit<AsPropsWithRef<InitialType, undefined>, keyof Props>,
    ref?: ForwardedRef<InitialType>
  ): React.ReactElement | null

  propTypes?: WeakValidationMap<
    Props & Omit<AsPropsWithRef<InitialType>, keyof Props>
  >
  contextTypes?: ValidationMap<any>
  defaultProps?: Props & Omit<AsPropsWithRef<InitialType>, keyof Props>
  displayName?: string
}
