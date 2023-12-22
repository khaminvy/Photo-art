"use client"
import Link from "next/link";
import { usePathname } from "next/navigation"
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav>
        <div className="flex justify-between mx-2 w-full">
          <div className="flex justify-start mx-2 items-center">
            <Image
              alt="Image Alt"
              src="/img/my-girl.jpg"
              width={50}
              height={50}
              priority
              className="rounded-full"
            />
            <h2 className="orange_gradient mx-2">Le Phan Art Gallery</h2>
          </div>
          <div class="px-4 cursor-pointer text-slate-950 block md:hidden" id="burger">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>                          
          </div>
        </div>

        <div className="">
            <Link href="/" className={`link ${pathname === '/' ? 'active' : ''} hidden md:block`}>Home</Link>
            <Link href="/about" className={`link ${pathname === '/about' ? 'active' : ''} hidden md:block`}>About</Link>
            <Link href="/contact" className={`link ${pathname === '/contact' ? 'active' : ''} hidden md:block`}>Contact</Link>
            <Link href="/photos" className={`link ${pathname === '/photos' ? 'active' : ''} hidden md:block`}>Photos</Link>
            <Link href="/create" className={`link ${pathname === '/create' ? 'active' : ''} hidden md:block`}>Create</Link>
        </div>
    </nav>
  )
}
