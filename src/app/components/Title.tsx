import { PropsWithChildren } from 'react'

export function Title(props: PropsWithChildren) {
  return (
    <h1 className='homeTitle'>
      {props.children}
    </h1>
  )
}