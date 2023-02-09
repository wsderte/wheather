import { useEffect, useState } from 'react'

export const useGetCurrentLocation = () => {
    const [latitude, setlatitude] = useState(0)
    const [longitude, setlongitude] = useState(0)

    async function getCurLocation() {
        if (!navigator.geolocation) {
            console.log("Can't handle geolocation")
            return
        }
        await navigator.geolocation.getCurrentPosition(
            (position) => {
                setlatitude((cur) => position.coords.latitude)
                setlongitude((cur) => position.coords.longitude)
                // console.log('nav')
            },
            (error) => {
                console.error(error)
            }
        )
    }

    useEffect(() => {
        console.log('useGetCurrentLocation start')
        getCurLocation()
    }, [])

    return { location: [latitude, longitude] }
}
