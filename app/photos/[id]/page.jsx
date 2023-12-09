import Image from "next/image"
import { notFound } from "next/navigation"
export const dynamicParams = true
import axios from "axios"
import connecMongoDB from "@/app/lib/mongodb"
import Photo from "@/app/models/model"

// export async function generateStaticParams(){
//     const res = await axios.get('http://localhost:4000/images')
//     console.log(res.data)

//     // const photos = await res.data

//     // return photos.map((photo)=>({
//     //     id: photo.id
//     // }))
//     return 1

// }
  

async function getPhoto(id){
  await new Promise(resolve => setTimeout(resolve, 3000))
  await connecMongoDB()
  const photo =  await Photo.findOne({_id: id})
  // const res = await axios.get(`http://localhost:3000/api/photos`)
  //console.log(res)
  //   if(!res.ok){
  //       notFound()
  //   }
  //   return res.data
  return photo
} 

export default async function PhotoDetails({params}) {
    const id = params.id
    const photo = await getPhoto(id)
  return (
    <div className="card mx-auto w-3/5 shadow-md shadow-red-400">
            <div key={photo._id} className="flex h-auto">
               <div className="w-3/5 overflow-hidden rounded shadow">
               {photo.photoName && <Image
                      alt={photo.photoName}
                      src={`/img/${photo.photoName}.jpg`}
                      width={600}
                      height={500}
                  />}
               </div>
                <div className="w-2/5 flex justify-center items-center px-4 text-center bg-slate-50">
                    <div>
                        <h2 className="pb-3">{photo.photoName}</h2>
                        <h3 className="pb-2">{photo.author}</h3>
                        <div className="flex justify-around">
                            <p className="p-2">Price: {photo.price}</p>
                            <p className="p-2">Style: {photo.style}</p>
                        </div>
                        <p className="p-2">AvailableUnits:  {photo.availableUnits}</p>
                    </div>
                </div>
            </div>    
    </div>
  )
}
