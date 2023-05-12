import React from 'react'
import BackButton from '../Components/Common/BackButton'

const PageNotFound = () => {
  return (
    <div>
      <h1>PageNotFound</h1>
        <BackButton link={'/movies'}/>
    </div>
  )
}

export default PageNotFound
