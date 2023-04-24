import Link from 'next/link'

type NavLinkProps = {
  url: string
  text: string
}

export const NavLink = ({ url, text }: NavLinkProps): JSX.Element => {
  return (
    <Link
      href={url}
      className='font-medium text-slate-300 transition-colors duration-200 ease-in-out hover:text-cyan-900'
    >
      {text}
    </Link>
  )
}
