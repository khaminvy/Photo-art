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
                <div className="text-8xl font-bold my-10 text-center drop-shadow-lg orange_gradient">
                   <p className="">Le Phan.</p>
                </div>
                <div className="text-4xl font-semibold text-center blue_gradient">
                   <p>Art Galerry.</p>
                </div>
              </h1>
              <p className="text-center py-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="text-center py-2">
                <Link href="/contact" className="btn-primary px-4 py-2 rounded">Get Contact</Link>
              </div>
            </div>
            <div className="text-center hidden md:block 
                  px-12 py-10 rounded-md">
              <Image
                  alt="Image Alt"
                  src="/img/impression.jpg"
                  width={350}
                  height={100}
                  priority={true}
                  className="object-contain rounded shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
