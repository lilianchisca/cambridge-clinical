import { NextApiRequest, NextApiResponse } from 'next'

import { env } from '@/env.mjs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path, token } = req.query

  if ((token as string) !== env.NEXT_PUBLIC_REVALIDATION_TOKEN) {
    return res.status(401).json({ message: 'Invalid token' })
  }
  if ((path as string).length === 0) {
    return res.status(401).json({ message: 'Path is required' })
  }

  try {
    await res.revalidate(path as string)
  } catch (err) {
    return res.status(500).send('Error revalidating')
  }

  return res.status(200).json({
    revalidated: true,
    message: `Path ${path} revalidated successfully`,
  })
}
