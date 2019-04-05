import React from 'react'

const AuthenticationPageLayout = ({children}) => {
  return (
    <div className="authentication-page-layout__wrapper">
      <div className="authentication-page-layout__content">{children}</div>
    </div>
  )
}

export default AuthenticationPageLayout
