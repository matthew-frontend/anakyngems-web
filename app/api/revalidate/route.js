import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const body = await request.json()
    const { secret, path, tag } = body

    // Verify secret key for security
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate specific path
    if (path) {
      revalidatePath(path)
      return NextResponse.json({ 
        revalidated: true, 
        path,
        message: `Revalidated ${path}` 
      })
    }

    // Revalidate by tag
    if (tag) {
      revalidateTag(tag)
      return NextResponse.json({ 
        revalidated: true, 
        tag,
        message: `Revalidated tag: ${tag}` 
      })
    }

    // Revalidate common paths
    revalidatePath('/')
    revalidatePath('/products')
    
    return NextResponse.json({ 
      revalidated: true,
      message: 'Revalidated homepage and products' 
    })

  } catch (err) {
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: err.message 
    }, { status: 500 })
  }
}