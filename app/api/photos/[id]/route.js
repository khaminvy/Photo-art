import connecMongoDB from "@/app/lib/mongodb"
import Photo from "@/app/models/model"
import { NextResponse } from "next/server"

export async function PUT(request, {params}){
    const { id } = params
    const { photoName, author, style, price, avaiableUnits } = await request.json()
    await connecMongoDB()
    await Photo.findByIdAndUpdate(id, { author, style, price, avaiableUnits })
    return NextResponse.json({message: "Photo updated"}, {status: 201})
}


export async function GET(request, {params}){

    const { id } = params
    await connecMongoDB()
    const photo =  await Photo.findOne({_id: id})
    if (!photo){
        return NextResponse.json({message: "Photo not found!"})
    }
    return NextResponse.json({photo}, {status: 200})
}