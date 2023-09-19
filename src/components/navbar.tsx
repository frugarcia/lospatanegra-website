"use client"
// Dependencies
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav>
            <ul className="flex text-lg gap-2">
                <li className="p-2"><Link href="/">Home</Link></li>
                <li className="p-2"><Link href="/palmares">Palmarés</Link></li>
                <li className="p-2"><Link href="/torneos">Torneos</Link></li>
            </ul>
        </nav>
    )
}