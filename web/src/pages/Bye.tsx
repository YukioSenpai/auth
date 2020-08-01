import React from 'react'
import { useByeQuery } from '../generated/graphql'
import { Spin } from '../components/spin/Spin'

export const Bye: React.FC = () => {
    const {data, loading, error} = useByeQuery({
        fetchPolicy: 'network-only'
    })

    if(loading) {
        return <div><Spin /></div>
    }

    if(error) {
        console.log(error)
        return <div>err</div>
    }

    if (!data) {
        return <div>no data</div>
    }
        return <div>{data.bye}</div>
}