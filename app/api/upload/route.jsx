import {writeFile} from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'

export async function POST(request) {
    const data = await request.formData()
    const file = data.get('file')
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const path = join("public/img/",file.name)
    await writeFile(path, buffer)

    return NextResponse.json({success: true})
 }