// pages/api/test-db.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConnect();
    res.status(200).json({ message: 'Database connected successfully' });
  } catch (error: any) {
    res.status(500).json({ 
      error: 'Database connection failed',
      details: {
        message: error.message,
        code: error.code
      }
    });
  }
}