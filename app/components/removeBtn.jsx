"use client"
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation"

export default function RemoveBtn({id}) {
  const router = useRouter()

  const removePhoto = async () => {
    const confirmed = confirm("Are you sure?")

    if(confirmed){
      const res = await fetch(`http://localhost:3000/api/photos?id=${id}`, {
        method: "DELETE"
      })

      if (res.status === 200){
        router.push('/photos')
        router.refresh()
      }
    }
  }
  return (
    <button onClick={removePhoto}  className="text-red-400">
        <HiOutlineTrash size={24} />
    </button>
  )
}
