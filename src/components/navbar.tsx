"use client"
// Dependencies
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Navbar({ isOpen }: { className?: string, isOpen: boolean }) {
    return (
        <nav className={cn("bg-[#034256] relative", isOpen ? "block" : "hidden sm:block")}>
            <ul className="flex text-lg gap-2 text-white justify-center sm:justify-end border-t-2 sm:border-t-0">
                <li className="p-2"><Link href="/">Home</Link></li>
                <li className="p-2"><Link href="/palmares">Palmarés</Link></li>
                <li className="p-2"><Link href="/torneos">Torneos</Link></li>
            </ul>
        </nav>
    )
}