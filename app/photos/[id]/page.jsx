import Image from "next/image"

async function getPhoto(id){
    const res = await fetch('http://localhost:4000/images/' + id, {
      next: {
        revalidate: 0
      }
    })
    return res.json() 
} 

export default async function PhotoDetails({params}) {
    const id = params.id
    const photo = await getPhoto(id)
  return (
    <div className="card mx-auto w-3/5">
            <div key={photo.id} className="flex h-auto">
               <div className="w-3/5 overflow-hidden rounded shadow">
                    <Image
                        alt={photo.pho}
                        src={`${photo.pho}`}
                        width={600}
                        height={400}
                    />
               </div>
                <div className="w-2/5 flex justify-center items-center px-4 text-center">
                    <div>
                        <h2 className="pb-3">{photo.name}</h2>
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
