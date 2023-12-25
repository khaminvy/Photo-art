import EditForm from "./EditForm"


const getPhotoById = async (id) => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(`${apiUrl}/api/photos/${id}`, {
      cache: "no-store"
    })
    if(!res.ok){
       throw new Error(" Fail to get Photo")
    }
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export default async function EditPhoto({params}) {
  const {id} = params
  const {photo} =  await getPhotoById(id)
  const {photoName, author, style, price, avaiableUnits} = photo
 
  return (
    <main> 
        <h2 className="text-primary text-center"> Edit Photo.</h2>
        <EditForm id={id} photoName={photoName} author={author} style={style} price={price} avaiableUnits={avaiableUnits} />
    </main>
  )
}
