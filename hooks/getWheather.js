import { useEffect, useState } from 'react'

export const useGetWheather = ({ location }) => {
    const [data, setdata] = useState(null)

    const url =
        'https://api.tomorrow.io/v4/timelines?location=50.6167296,30.441472&fields=temperature&timesteps=current&units=metric&apikey=iNbMAOdbHSHaZF2taTpGCfG9Wuhs3eLg'

    const getTimelineURL = 'https://api.tomorrow.io/v4/timelines'
    const apikey = 'iNbMAOdbHSHaZF2taTpGCfG9Wuhs3eLg'
    const locationAn = [50.6167296, 30.441472]

    const fields = [
        'precipitationIntensity',
        'precipitationType',
        'windSpeed',
        'windGust',
        'windDirection',
        'temperature',
        'temperatureApparent',
        'cloudCover',
        'cloudBase',
        'cloudCeiling',
        'weatherCode',
    ]

    const units = 'imperial'
    const timesteps = ['current', '1h', '1d']

    const timezone = 'W-SU'

    async function getData() {
        const res = await fetch(url, { method: 'GET', compress: true })
        const data = await res.json()
        console.log('bebraaaaaaaaaaaaaaaaaaaa')
        setdata(data)
    }

    console.log('bebra')
    useEffect(() => {
        console.log('use effect run')
        getData()
    }, [])

    return { data }
}
