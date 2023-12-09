import connecMongoDB from "@/app/lib/mongodb";
import Photo from "@/app/models/model";
import { NextResponse } from "next/server";

export async function POST (request){
    const { photoName, author, style, price, avaiableUnits} = await request.json();
    await connecMongoDB()
    await Photo.create({photoName, author, style, price, avaiableUnits})
    return NextResponse.json({message: "Photo is created"}, {status: 201})
}

export async function GET(request){
    await connecMongoDB()
    const photos = await Photo.find()
    if(!photos){
        return NextResponse.json({message:"Can not get photos."})
    }
    //console.log(photos)
    return NextResponse.json(photos)
}