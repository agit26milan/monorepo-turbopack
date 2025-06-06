
"use client"
import React from 'react'
import useDashboard from './hooks/useDashboard'


const DashboardPage = () => {
    const {getDetailUser} = useDashboard()

    React.useEffect(() => {
        getDetailUser()
    }, [])

    return (
      <div>Dashboard</div>
    )
}


export default DashboardPage