"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav>
        <h2>Le Phan Art Gallery</h2>
        <div>
            <Link href="/" className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link href="/about" className={`link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link href="/contact" className={`link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
            <Link href="/photos" className={`link ${pathname === '/photos' ? 'active' : ''}`}>Photos</Link>
            <Link href="/create" className={`link ${pathname === '/create' ? 'active' : ''}`}>Create</Link>
        </div>
    </nav>
  )
}
