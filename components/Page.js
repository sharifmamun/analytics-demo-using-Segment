import React, { useEffect } from 'react'
import onRouteChange from '@analytics/router-utils'
import Header from './Header'
import analytics from '../analytics' 

// Track client-side page views with Segment


const Page = ({ children }) => {
  useEffect(() => {
    // run function on when all providers are finished loading
    analytics.ready(()=>{
      analytics.page();
    })
    // run function on route change
    onRouteChange(()=>{
      analytics.page()
    })
  }, [analytics])

  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Page
