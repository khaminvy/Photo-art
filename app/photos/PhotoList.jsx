export const dynamicParams = true
import connecMongoDB from "@/app/lib/mongodb";
import Photo from "@/app/models/model";
import Image from "next/image"
import Link from "next/link"


async function getPhotos(){
  //initate delay 
  await new Promise(resolve => setTimeout(resolve, 4000))
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    await connecMongoDB()
    const photos = await Photo.find({})
    
    if(!photos){
      throw new Error("Failed to fecth Photos")
    }
    return photos
   } catch (error) {
     console.log("Error loading photos", error)
   }
} 

export default async function PhotoList() {
  const photos = await getPhotos()
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-md 
        text-center bg-orange-300 p-10 drop-shadow-md">
        {photos.map(photo=>{ 
          return (
            <Link href={`/photos/${photo._id}`} key={photo._id}>
              <div className="flex justify-center bg-inherit">
                <div className="relative mx-auto rounded-2xl overflow-hidden">
                  {photo.photoId && <Image
                        alt={photo.photoName}
                        src={`/img/${photo.photoId}.jpg`}
                        sizes="600px"
                        width={300}
                        height={200}
                        style={{objectFit: "contain"}}
                        className="border-4 rounded-2xl"
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
