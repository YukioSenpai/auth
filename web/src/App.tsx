import React, { useState, useEffect } from 'react'
import { Routes } from './Routes'
import { setAccessToken } from './accessToken'
import { Spin } from './components/spin/Spin'

export const App: React.FC = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:4000/refresh_token', {
            method: 'POST',
            credentials: 'include'
        }).then(async x => {
            const {accessToken} = await x.json()
            setAccessToken(accessToken)
            setLoading(false)
        })
    }, [])

    if(loading) {
        return <div><Spin /></div>
    }
        return <Routes />
}