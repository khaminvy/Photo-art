import Link from "next/link"
import Image from "next/image"


export default function Home() {
  return (
    <main>
      <section id="intro">
        <div className="container-lg">
          <div className="grid md:grid-cols-2 md:gap-3">
            <div className="w-full text-center md:text-start">
              <h1>
                <div className="text-8xl font-bold my-10 text-center drop-shadow-lg">
                   <p>Le Phan.</p>
                </div>
                <div className="text-4xl font-semibold text-center">
                   <p>Art Galerry.</p>
                </div>
              </h1>
              <p className="text-center py-4">
                This is a paragraph.
              </p>
              <div className="text-center py-2">
                <Link href="/contact" className="btn-primary px-4 py-3">Get Contact</Link>
              </div>
            </div>
            <div className="text-center hidden md:block 
                  p-1 bg-slate-50 rounded-md">
              <Image
                  alt="Image Alt"
                  src="/img/my-girl.jpg"
                  width={900}
                  height={700}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
