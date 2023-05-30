import { revalidatePath, revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')
  const path = request.nextUrl.searchParams.get('path')
  const tag = request.nextUrl.searchParams.get('tag')

  const revalidated = {
    path,
    tag,
    token,
  }

  if (!token || token !== 'mdportal.mydevenv.co') {
    return NextResponse.json({ revalidated, message: 'Invalid token' }, { status: 401 })
  }
  if ((!path || path.length === 0) && (!tag || tag.length === 0)) {
    return NextResponse.json(
      {
        revalidated,
        message: 'Path or tag required',
      },
      { status: 401 }
    )
  }

  if (path) {
    revalidatePath(path)
  }

  if (tag) {
    revalidateTag(tag)
  }

  return NextResponse.json({
    revalidated,
    message: 'Revalidation triggered',
  })
}

export const runtime = 'edge'
