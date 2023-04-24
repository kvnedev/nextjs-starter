import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
