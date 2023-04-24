import React from 'react'

type ContainerProps = {
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const maxWidth = {
  sm: 'max-w-2xl',
  md: 'max-w-3xl',
  lg: 'max-w-5xl',
  xl: 'max-w-7xl',
}

export default function Container({
  children,
  size = 'lg',
}: ContainerProps): JSX.Element {
  return (
    <div className={`${maxWidth[size]} mx-auto w-full px-4 sm:px-6 lg:px-8`}>
      {children}
    </div>
  )
}
