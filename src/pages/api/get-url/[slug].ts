import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../db/client';

const getUrl = async (req: NextApiRequest, res: NextApiResponse) => {
  const slug = req.query['slug'];

  if (!slug) {
    return res.status(404).json({ error: 'no slug entered' });
  }

  const data = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    return res.status(404).json({ error: 'slug not found' });
  }

  return res.json(data);
};

export default getUrl;
