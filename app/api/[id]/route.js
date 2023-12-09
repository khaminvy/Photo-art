import connecMongoDB from "@/lib/mongodb"
import Photo from "@/models/photo"
import { NextResponse } from "next/server"

export async function PUT(request, {params}){
    const { id } = params
    const {  name, author, style, price, avaiableUnits } = request.json()
    await connecMongoDB()
    await Photo.findOneAndUpdate(id, { name, author, style, price })
    return NextResponse.json({message: "Photo updated"}, {status: 200})
}


export async function GET(request, {params}){
    const { id } = params
    await connecMongoDB()
    const photo =  await Photo.findOne({_id: id})
    if (!photo){
        return NextResponse.json({message: "Photo not found!"})
    }
    console.log(photo)
    //return NextResponse.json({message: "Photo not found!"})
    return NextResponse.json({photo}, {status: 200})
}