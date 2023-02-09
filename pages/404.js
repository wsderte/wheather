import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 10000)

        return () => {
            clearTimeout(timer)
        }
    })

    return (
        <div className="not-found">
            <h1>Something went wrong</h1>
            <p>
                <Link href="/">
                    <a>Go back to the Homepage</a>
                </Link>
            </p>
        </div>
    )
}

export default NotFound
