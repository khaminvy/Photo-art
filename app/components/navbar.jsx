import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <h2>Le Phan Art Gallery</h2>
        <div>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/photos">Photos</Link>
        </div>
    </nav>
  )
}
