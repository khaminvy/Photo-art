import Link from "next/link"
export default function notFound() {
  return (
   <main className="text-center">
        <h2 className="text-3xl">
            There is a problem
        </h2>
        <p>We could not find the page you were looking for.</p>
        <p>Go back to the <Link href="/">Home Page</Link></p>
   </main>
  )
}
