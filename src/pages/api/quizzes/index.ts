import fs from 'fs';
import path from 'path';

import type { Quiz } from '@/types/Quiz';
import type { NextApiRequest, NextApiResponse } from 'next';

export type ResponseDataType = {
  quizzes: Quiz[];
};

const handler = (_: NextApiRequest, res: NextApiResponse<ResponseDataType>) => {
  try {
    const json = fs
      .readFileSync(path.join(process.cwd(), 'data/quizzes.json'))
      .toString();
    const data = JSON.parse(json) as ResponseDataType;

    res.json(data);
  } catch {
    res.status(500).end();
  }
};

export default handler;
