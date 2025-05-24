import React from 'react'
import Template from '../components/Template'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome"
      desc1="Use To-Do app and make your life easier"
      desc2="Go to my todo app"
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup