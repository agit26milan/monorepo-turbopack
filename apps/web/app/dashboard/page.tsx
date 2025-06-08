
"use client"
import React from 'react'
import useDashboard from './hooks/useDashboard'
import NavbarComponent from '@/components/Navbar/Navbar'


const DashboardPage = () => {
    const {getDetailUser} = useDashboard()

    React.useEffect(() => {
        getDetailUser()
    }, [])

    return (
      <React.Fragment>
        <NavbarComponent />
      </React.Fragment>
    )
}


export default DashboardPage