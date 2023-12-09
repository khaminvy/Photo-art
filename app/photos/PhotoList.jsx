import Image from "next/image"
import Link from "next/link"
import axios from "axios"

async function getPhotos(){
  //initate delay
    await new Promise(resolve => setTimeout(resolve, 3000))
    const res = await axios.get('http://localhost:3000/api/photos')
    //console.log(res.data)
    await new Promise(resolve => setTimeout(resolve, 3000))
    return res.data 
} 
export default async function PhotoList() {
  const photos = await getPhotos()
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-2 bg-slate-600 rounded-md shadow-md shadow-gray-500">
        {photos?.map(photo=>{ 
          return (
            <Link href={`/photos/${photo._id}`} key={photo._id}>
              <div className="">
                <div className="card relative">
                  {photo.photoName && <Image
                        alt={photo.photoName}
                        src={`/img/${photo.photoName}.jpg`}
                        width={800}
                        height={100}
                    />}
                  <h4 className="text-center text-lg font-semibold absolute bottom-6 left-12">{photo.photoName}</h4>
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
