import React, { FC, ReactNode } from 'react'

interface  AuthLayoutProps {

    children: ReactNode;
}

const AuthLayoutProps: FC<AuthLayoutProps> = ({children}) => {
  return (
    <div className='bg-zinc-300 
    dark:bg-gray-900 bg-opacity-45 p-10 '>

        {children}
      
    </div>
  )
}

export default AuthLayoutProps