import Link from 'next/link'

export const Navbar = () => {
    return (
        <nav>
            <div className="navbar-logo">
                <h1>Ascella Wheater</h1>
            </div>

            <Link href="/">Home</Link>
            <Link href="/menu">Menu</Link>
        </nav>
    )
}
