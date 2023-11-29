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
      <div className="grid grid-cols-3 gap-1">
      {photos?.map((photo)=>{ 
        return (
          <Link href={`/photos/${photo.id}`} key={photo.id}>
            <div className="card my-5 relative">
              <div className="">
                {photo.name && <Image
                      alt={photo.name}
                      src={`/img/${photo.name}.jpg`}
                      width={300}
                      height={340}
                  />}
                <h2 className="text-center absolute bottom-3 left-2 text-white">{photo.name}</h2>
                <h3 className="text-center absolute top-2 right-5 text-red-500 pr-6">{photo.author}</h3>
              </div>
            </div>
          </Link>
        ) 
      })}
      </div>
      
    </>
  )
}
