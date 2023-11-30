import Image from "next/image"
import Link from "next/link"

async function getPhotos(){
  //initate delay
  await new Promise(resolve => setTimeout(resolve, 3000))

    const res = await fetch('http://localhost:4000/images', {
      next: {
        revalidate: 0
      }
    })
    return res.json() 
} 
export default async function PhotoList() {
  const photos = await getPhotos()
 // console.log(photos)
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-2 bg-slate-600 rounded-md shadow-md shadow-gray-500">
      {photos?.map((photo)=>{ 
        return (
          <Link href={`/photos/${photo.id}`} key={photo.id}>
            <div className="">
              <div className="card relative">
                {photo.name && <Image
                      alt={photo.name}
                      src={`/img/${photo.name}.jpg`}
                      width={800}
                      height={100}
                  />}
                <h4 className="text-center text-lg font-semibold absolute bottom-6 left-10 text-white">{photo.name}</h4>
                <h4 className="text-center absolute top-2 left-2 sm:right-5 text-red-500 pr-6">{photo.author}</h4>
              </div>
            </div>
          </Link>
        ) 
      })}
      </div>
      
    </>
  )
}
