import Link from 'next/link'

export function BadTaste() {
    return (
        <div className='badtaste'>
            <p>Website by <Link href={"https://badtaste.dev/"} target='_' className='bad'>Bad Taste</Link></p>
        </div>
    )
}