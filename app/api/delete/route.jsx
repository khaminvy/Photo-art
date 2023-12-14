import {writeFile} from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import { join } from 'path'
import { unlink } from 'fs'

export async function DELETE(request) {
    const data = await request.formData()
    const filename = data.get('filename')
    const path = join("public/img/",filename)
    unlink(path, (err) => {
        if (err) throw err
        console.log('path/file.txt was deleted')
    })
    return NextResponse.json({success: true})
 }