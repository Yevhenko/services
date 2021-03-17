import { Response } from 'express';

export async function testFunction(): Promise<string> {
  try {
    return 'TesT!';
  } catch (error) {
    throw new Error(error);
  }
}

export function errorHandler(err, res: Response): any {
  if (!err) return res.json('Everything is OK!');

  return res.status(500).json({ error: err.message });
}
