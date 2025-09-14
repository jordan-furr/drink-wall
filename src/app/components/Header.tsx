import Link from 'next/link'
import { Title } from './Title'

export function Header() {
  return (
    <div >
      <header className='dwHeader'>
        <Link
          href="/"
        >
          <p className='logo'>drink-wall</p>
        </Link>
      </header>
    </div>
  )
}