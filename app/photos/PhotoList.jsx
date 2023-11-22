import Image from "next/image"
import Link from "next/link"

async function getPhotos(){
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
            <div className="card my-5">
              <div className="">
                <Image
                      alt={photo.pho}
                      src={`${photo.pho}`}
                      width={300}
                      height={340}
                  />
                <h2 className="text-center">{photo.name}</h2>
                <h3 className="text-center">{photo.author}</h3>
              </div>
            </div>
          </Link>
        ) 
      })}
      </div>
      
    </>
  )
}
