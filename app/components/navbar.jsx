"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav>
        <div className="flex justify-start mx-3">
          <Image
            alt="Image Alt"
            src="/img/my-girl.jpg"
            width={50}
            height={50}
            priority
            className="rounded-full"
          />
          <h2>Le Phan Art Gallery</h2>
        </div>
       
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
