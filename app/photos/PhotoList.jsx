import Image from "next/image"

async function getPhotos(){
    const res = await fetch('http://localhost:4000/images')
    return res.json() 
} 

export default async function PhotoList() {
  const photos = await getPhotos()
  console.log(photos)
  return (
    <>
      {photos?.map((photo)=>{ 
        
        return (
          <div key={photo.id} className="card my-5">
            <Image
                  alt={photo.pho}
                  src={photo.photo}
                  width={100}
                  height={120}
              />
            <h2>{photo.name}</h2>
            <h3>{photo.author}</h3>
          </div>
        ) 
      })}
    </>
  )
}
