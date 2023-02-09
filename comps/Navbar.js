import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav>
            <div className="navbar-logo">
                <h1>Ascella Wheater</h1>
            </div>

            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/menu">
                <a>Menu</a>
            </Link>
        </nav>
    )
}
