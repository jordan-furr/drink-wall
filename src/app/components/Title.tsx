import { PropsWithChildren } from 'react'

export function Title(props: PropsWithChildren) {
  return (
    <h1 className='title'>
      {props.children}
    </h1>
  )
}