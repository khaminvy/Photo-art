import connecMongoDB from "@/app/lib/mongodb";
import Contact from "@/app/models/ContactModel";
import { NextResponse } from "next/server";


export async function POST (request){
    const { firstName, lastName, email, message} = await request.json();
    await connecMongoDB()
    await Contact.create({firstName, lastName, email, message})
    return NextResponse.json({message: "A contact is created"}, {status: 201})
}