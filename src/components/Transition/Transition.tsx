// modified, unhooked version

// import React from 'react'
// // @ts-ignore
// import { CSSTransition as ReactCSSTransition } from 'react-transition-group'
// import PropTypes from 'prop-types'
// import { AnimationTailwindClasses } from './../../types'

// // function useIsInitialRender() {
// //   const isInitialRender = useRef(true)
// //   useEffect(() => {
// //     isInitialRender.current = false
// //   }, [])
// //   return isInitialRender.current
// // }

// function CSSTransition({
//   show,
//   enter = '',
//   enterFrom = '',
//   enterTo = '',
//   leave = '',
//   leaveFrom = '',
//   leaveTo = '',
//   appear,
//   children,
// }: any) {
//   const enterClasses = enter.split(' ').filter((s: any) => s.length)
//   const enterFromClasses = enterFrom.split(' ').filter((s: any) => s.length)
//   const enterToClasses = enterTo.split(' ').filter((s: any) => s.length)
//   const leaveClasses = leave.split(' ').filter((s: any) => s.length)
//   const leaveFromClasses = leaveFrom.split(' ').filter((s: any) => s.length)
//   const leaveToClasses = leaveTo.split(' ').filter((s: any) => s.length)

//   function addClasses(node: any, classes: any) {
//     classes.length && node.classList.add(...classes)
//   }

//   function removeClasses(node: any, classes: any) {
//     classes.length && node.classList.remove(...classes)
//   }

//   return (
//     <ReactCSSTransition
//       appear={appear}
//       unmountOnExit
//       in={show}
//       addEndListener={(node: any, done: any) => {
//         node.addEventListener('transitionend', done, false)
//       }}
//       onEnter={(node: any) => {
//         addClasses(node, [...enterClasses, ...enterFromClasses])
//       }}
//       onEntering={(node: any) => {
//         removeClasses(node, enterFromClasses)
//         addClasses(node, enterToClasses)
//       }}
//       onEntered={(node: any) => {
//         removeClasses(node, [...enterToClasses, ...enterClasses])
//       }}
//       onExit={(node: any) => {
//         addClasses(node, [...leaveClasses, ...leaveFromClasses])
//       }}
//       onExiting={(node: any) => {
//         removeClasses(node, leaveFromClasses)
//         addClasses(node, leaveToClasses)
//       }}
//       onExited={(node: any) => {
//         removeClasses(node, [...leaveToClasses, ...leaveClasses])
//       }}
//     >
//       {children}
//     </ReactCSSTransition>
//   )
// }

// function TransitionCompiler({ show, appear, ...rest }: any) {
//   return <CSSTransition appear={appear} show={show} {...rest} />
// }

// interface TransitionProps {
//   show: Boolean
//   children?: React.ReactNode
//   // supabase ui animation
//   enter?: string
//   enterFrom?: string
//   enterTo?: string
//   leave?: string
//   leaveFrom?: string
//   leaveTo?: string
//   // custom animation (tailwind based)
//   transition?: AnimationTailwindClasses
// }

// const Transition = (props: TransitionProps) => {
//   return (
//     <TransitionCompiler
//       show={props.show}
//       enter={
//         props.transition && props.transition.enter
//           ? props.transition.enter
//           : props.enter
//       }
//       enterFrom={
//         props.transition && props.transition.enterFrom
//           ? props.transition.enterFrom
//           : props.enterFrom
//       }
//       enterTo={
//         props.transition && props.transition.enterTo
//           ? props.transition.enterTo
//           : props.enterTo
//       }
//       leave={
//         props.transition && props.transition.leave
//           ? props.transition.leave
//           : props.leave
//       }
//       leaveFrom={
//         props.transition && props.transition.leaveFrom
//           ? props.transition.leaveFrom
//           : props.leaveFrom
//       }
//       leaveTo={
//         props.transition && props.transition.leaveTo
//           ? props.transition.leaveTo
//           : props.leaveTo
//       }
//     >
//       {props.children}
//     </TransitionCompiler>
//   )
// }

// export default Transition

// // From: https://gist.github.com/adamwathan/3b9f3ad1a285a2d1b482769aeb862467

// import React, { useRef, useEffect, useContext } from 'react'
// // @ts-ignore
// import { CSSTransition as ReactCSSTransition } from 'react-transition-group'
// import PropTypes from 'prop-types'

// const TransitionContext = React.createContext({
//   parent: {},
// })

// function useIsInitialRender() {
//   const isInitialRender = useRef(true)
//   useEffect(() => {
//     isInitialRender.current = false
//   }, [])
//   return isInitialRender.current
// }

// function CSSTransition({
//   show,
//   enter = '',
//   enterFrom = '',
//   enterTo = '',
//   leave = '',
//   leaveFrom = '',
//   leaveTo = '',
//   appear,
//   children,
// }: any) {
//   const enterClasses = enter.split(' ').filter((s: any) => s.length)
//   const enterFromClasses = enterFrom.split(' ').filter((s: any) => s.length)
//   const enterToClasses = enterTo.split(' ').filter((s: any) => s.length)
//   const leaveClasses = leave.split(' ').filter((s: any) => s.length)
//   const leaveFromClasses = leaveFrom.split(' ').filter((s: any) => s.length)
//   const leaveToClasses = leaveTo.split(' ').filter((s: any) => s.length)

//   function addClasses(node: any, classes: any) {
//     classes.length && node.classList.add(...classes)
//   }

//   function removeClasses(node: any, classes: any) {
//     classes.length && node.classList.remove(...classes)
//   }

//   return (
//     <ReactCSSTransition
//       appear={appear}
//       unmountOnExit
//       in={show}
//       addEndListener={(node: any, done: any) => {
//         node.addEventListener('transitionend', done, false)
//       }}
//       onEnter={(node: any) => {
//         addClasses(node, [...enterClasses, ...enterFromClasses])
//       }}
//       onEntering={(node: any) => {
//         removeClasses(node, enterFromClasses)
//         addClasses(node, enterToClasses)
//       }}
//       onEntered={(node: any) => {
//         removeClasses(node, [...enterToClasses, ...enterClasses])
//       }}
//       onExit={(node: any) => {
//         addClasses(node, [...leaveClasses, ...leaveFromClasses])
//       }}
//       onExiting={(node: any) => {
//         removeClasses(node, leaveFromClasses)
//         addClasses(node, leaveToClasses)
//       }}
//       onExited={(node: any) => {
//         removeClasses(node, [...leaveToClasses, ...leaveClasses])
//       }}
//     >
//       {children}
//     </ReactCSSTransition>
//   )
// }

// function TransitionCompiler({ show, appear, ...rest }: any) {
//   const { parent } = useContext(TransitionContext)
//   const isInitialRender = useIsInitialRender()
//   const isChild = show === undefined

//   if (isChild) {
//     return (
//       <CSSTransition
//         // @ts-ignore
//         appear={parent.appear || !parent.isInitialRender}
//         // @ts-ignore
//         show={parent.show}
//         {...rest}
//       />
//     )
//   }

//   return (
//     <TransitionContext.Provider
//       value={{
//         parent: {
//           show,
//           isInitialRender,
//           appear,
//         },
//       }}
//     >
//       <CSSTransition appear={appear} show={show} {...rest} />
//     </TransitionContext.Provider>
//   )
// }

// const Transition = ({
//   show = true,
//   enter = 'ease-out duration-200',
//   enterFrom = 'opacity-0',
//   enterTo = 'opacity-100',
//   leave = 'ease-in duration-200',
//   leaveFrom = 'opacity-100',
//   leaveTo = 'opacity-0',
// }) => {
//   return (
//     <TransitionCompiler
//       show={show}
//       enter={enter}
//       enterFrom={enterFrom}
//       enterTo={enterTo}
//       leave={leave}
//       leaveFrom={leaveFrom}
//       leaveTo={leaveTo}
//     />
//   )
// }

// Transition.propTypes = {
//   show: PropTypes.bool,
//   enter: PropTypes.string,
//   enterFrom: PropTypes.string,
//   enterTo: PropTypes.string,
//   leave: PropTypes.string,
//   leaveFrom: PropTypes.string,
//   leaveTo: PropTypes.string,
// }

// export default Transition

// JSX Version by Adam Wathan: https://gist.github.com/adamwathan/e0a791aa0419098a7ece70028b2e641e

import React, { ReactNode, useRef, useEffect, useContext } from 'react'
import { CSSTransition as ReactCSSTransition } from 'react-transition-group'

interface TransitionProps {
  show?: boolean
  enter?: string
  enterFrom?: string
  enterTo?: string
  leave?: string
  leaveFrom?: string
  leaveTo?: string
  appear?: string | boolean
  className?: string
  children: ReactNode
}

interface ParentContextProps {
  parent: {
    show?: boolean
    appear?: string | boolean
    isInitialRender?: boolean
  }
}

const TransitionContext = React.createContext<ParentContextProps>({
  parent: {},
})

function useIsInitialRender() {
  const isInitialRender = useRef(true)
  useEffect(() => {
    isInitialRender.current = false
  }, [])
  return isInitialRender.current
}

function CSSTransition({
  show,
  enter = '',
  enterFrom = '',
  enterTo = '',
  leave = '',
  leaveFrom = '',
  leaveTo = '',
  appear,
  className,
  children,
}: TransitionProps) {
  const nodeRef = React.useRef<HTMLDivElement>(null)
  const enterClasses = enter.split(' ').filter((s) => s.length)
  const enterFromClasses = enterFrom.split(' ').filter((s) => s.length)
  const enterToClasses = enterTo.split(' ').filter((s) => s.length)
  const leaveClasses = leave.split(' ').filter((s) => s.length)
  const leaveFromClasses = leaveFrom.split(' ').filter((s) => s.length)
  const leaveToClasses = leaveTo.split(' ').filter((s) => s.length)

  function addClasses(classes: string[]) {
    if (nodeRef.current) nodeRef.current.classList.add(...classes)
  }

  function removeClasses(classes: string[]) {
    if (nodeRef.current) nodeRef.current.classList.remove(...classes)
  }

  return (
    <ReactCSSTransition
      appear={appear}
      unmountOnExit
      in={show}
      nodeRef={nodeRef}
      addEndListener={(done) => {
        nodeRef.current?.addEventListener('transitionend', done, false)
      }}
      onEnter={() => {
        addClasses([...enterClasses, ...enterFromClasses])
      }}
      onEntering={() => {
        removeClasses(enterFromClasses)
        addClasses(enterToClasses)
      }}
      onEntered={() => {
        removeClasses([...enterToClasses, ...enterClasses])
      }}
      onExit={() => {
        addClasses([...leaveClasses, ...leaveFromClasses])
      }}
      onExiting={() => {
        removeClasses(leaveFromClasses)
        addClasses(leaveToClasses)
      }}
      onExited={() => {
        removeClasses([...leaveToClasses, ...leaveClasses])
      }}
    >
      <div ref={nodeRef} className={className}>
        {children}
      </div>
    </ReactCSSTransition>
  )
}

export function Transition({ show, appear, ...rest }: TransitionProps) {
  const { parent } = useContext(TransitionContext)
  const isInitialRender = useIsInitialRender()
  const isChild = show === undefined

  if (isChild) {
    return (
      <CSSTransition
        appear={parent.appear || !parent.isInitialRender}
        show={parent.show}
        {...rest}
      />
    )
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  )
}
