import Image from "next/image"

export default function About() {
  return (
    <main>
        <section id="Pricing" className="bg-slate-200 mt-1">
            <div className="container-lg">
                <div cl="text-center">
                    <h1>Our Team</h1>
                    <p className="leading-10">We dedicate for our Products.</p>
                </div>

                <div className="flex justify-center items-center gap-0">
                    <div className="col-span-8 lg:col-span-4 xl:col-span-3">
                        <div className="card">
                            <div className="card-body text-center py-4 px-2">
                                <h3>Thanh van Pham</h3>
                                <p className="leading-6">Video Creator</p>
                                <div className="relative mx-auto rounded-2xl overflow-hidden">
                                    <Image
                                        alt="Image Alt"
                                        src="/img/ThanhP.png"
                                        sizes="600px"
                                        width={300}
                                        height={200}
                                        style={{objectFit: "contain"}}
                                        className="border rounded-full"
                                />
                                </div>
                                
                                <p className="mx-5 lg:block">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolorem minus obcaecati mollitia facilis delectus quod pariatur expedita quo similique velit blanditiis molestias et dolores, praesentium commodi dolor doloremque animi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-9 lg:col-span-4 shadow-md">
                        <div className="card text-center">
                            <h3>Phan Le</h3>
                            <p className="leading-10">Painter</p>
                            <div className="text-center text-primary">Main Character.</div>
                            <div className="text-center py-5">
                            <div className="relative mx-auto rounded-2xl overflow-hidden">
                                    <Image
                                        alt="Image Alt"
                                        src="/img/Lephan1.jpg"
                                        sizes="600px"
                                        width={300}
                                        height={200}
                                        style={{objectFit: "contain"}}
                                        className="border rounded-2xl m-2"
                                />
                            </div>
                            <p className="mx-5 lg:block">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolorem minus obcaecati mollitia facilis delectus quod pariatur expedita quo similique velit blanditiis molestias et dolores, praesentium commodi dolor doloremque animi.
                            </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-8 lg:col-span-4 xl:col-span-3">
                        <div className="card">
                            <div className="text-center py-4 px-2">
                                <h3 className="card-title">Duc Tri</h3>
                                <p className="leading-6">Photographer.</p>
                                <div className="relative rounded-2xl overflow-hidden">
                                    <Image
                                        alt="Image Alt"
                                        src="/img/Ductri.png"
                                        sizes="600px"
                                        width={300}
                                        height={200}
                                        style={{objectFit: "contain"}}
                                        className="border rounded-full"
                                />
                                </div>
                                <p className="mx-5 lg:block">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. A dolorem minus obcaecati mollitia facilis delectus quod pariatur expedita quo similique velit blanditiis molestias et dolores, praesentium commodi dolor doloremque animi.
                                </p>
                            </div>
                        </div>
                    </div>
                  </div>
            </div> 
        </section>
        
        
    </main>
  )
}
