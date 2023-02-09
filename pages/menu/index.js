import React, { useEffect, useState } from 'react'
import { useGetCurrentLocation } from '../../hooks/getCurrentLocation'
import { useGetWheather } from '../../hooks/getWheather'

export const getStaticProps = async () => {
    const url =
        'https://api.tomorrow.io/v4/timelines?location=50.6167296,30.441472&fields=temperature&timesteps=current&units=metric&apikey=iNbMAOdbHSHaZF2taTpGCfG9Wuhs3eLg'

    const res = await fetch(url, { method: 'GET', compress: true })
    const data = await res.json()
    console.log('BEBRA')
    return {
        props: { Data: data },
    }
}

export default function Test({ Data }) {
    const location = useGetCurrentLocation()
    // console.log(location)
    const data = useGetWheather(location)
    const temperature =
        data?.data?.data?.timelines[0]?.intervals[0]?.values?.temperature
    console.log(temperature)
    console.log(data)

    return (
        <div>
            <div>
                {'Temperature: '} {temperature ? temperature : 'loading'}
            </div>
        </div>
    )
}
