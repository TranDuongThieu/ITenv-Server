import express, { Express, Request, Response } from 'express';
import dbConnect from './config';
import * as dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.get('/:id', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server ' + req.params.id);
});

dbConnect();
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
