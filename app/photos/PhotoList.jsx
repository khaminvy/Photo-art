import Image from "next/image"
import Link from "next/link"


async function getPhotos(){
 

  //initate delay
  await new Promise(resolve => setTimeout(resolve, 4000))
  try {
    const res = await fetch('http://localhost:3000/api/photos', {
      next:{
        revalidate: 0
      }
    })
    if(!res.ok){
      throw new Error("Failed to fecth Photos")
    }

    return res.json()
  } catch (error) {
    console.log("Error loading photos", error)
  }
} 
export default async function PhotoList() {
  const {photos} = await getPhotos()
  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-2 rounded-md">
        {photos.map(photo=>{ 
          return (
            <Link href={`/photos/${photo._id}`} key={photo._id}>
              <div className="">
                <div className="relative" style={{width: "300px", height: "400px"}}>
                  {photo.photoId && <Image
                        alt={photo.photoName}
                        src={`/img/${photo.photoId}.jpg`}
                        sizes="600px"
                        fill
                        style={{objectFit: "contain"}}
                    />}
                </div>
              </div>
            </Link>
          ) 
        })}
      </div>     
    </main>
  )
      }
