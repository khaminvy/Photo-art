import Image from "next/image"
import { notFound } from "next/navigation"
export const dynamicParams = true
import {HiPencilAlt} from "react-icons/hi"
import RemoveBtn from "@/app/components/removeBtn"
import Link from "next/link"


async function getPhoto(id){
  await new Promise(resolve => setTimeout(resolve, 3000))
  const res = await fetch(`http://localhost:3000/api/photos/${id}`, {
      cache: "no-store"
    })
    if(res.status !== 200){
      notFound()
    }
    const data = await res.json()
    return data
} 

export default async function PhotoDetails({params}) {
  const id = params.id
  const {photo} = await getPhoto(id)


  return (
    <div className="card mx-auto w-3/5 shadow-md shadow-red-400">
            <div key={photo._id} className="flex h-auto">
               <div className="w-3/5 overflow-hidden rounded shadow">
               {photo.photoId && <Image
                      alt={photo.photo}
                      src={`/img/${photo.photoId}.jpg`}
                      width={600}
                      height={500}
                  />}
               </div>
                <div className="w-2/5 flex justify-center items-center bg-slate-300">
                    <div className="px-4 text-center font-extrabold">
                        <h2 className="pb-3">{photo.photoName}</h2>
                        <h3 className="pb-2">{photo.author}</h3>
                        <div className="flex justify-around">
                            <p className="p-2">Price: ${photo.price}</p>
                            <p className="p-2">Style: {photo.style}</p>
                        </div>
                        <p className="p-2">AvailableUnits:  {photo.avaiableUnits}</p>
                        <div className="flex justify-center">
                          <RemoveBtn id={photo._id} photoId = {photo.photoId}/>
                          <Link href={`/editPhoto/${id}`} className="p-2 text-red-400">
                            <HiPencilAlt size={24}/>
                          </Link>   
                        </div>
                    </div>
                </div>
            </div>    
    </div>
  )
}
