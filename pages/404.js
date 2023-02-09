import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 5000)
        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <div>
            <h1>Something went wrong</h1>
            <p>
                <Link href="/">
                    <a>Homepage</a>
                </Link>
            </p>
            <p>
                <Link href="/menu">
                    <a>Wheather</a>
                </Link>
            </p>
        </div>
    )
}

export default NotFound
