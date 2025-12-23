import express, {type Express, type Request, type Response } from 'express';

const app: Express = express();

app.get('/api/rand', (req: Request, res: Response) => {
    res.status(200).json({message: "Success"})
});

app.listen(3000, () => {
  console.log(`Server is running}`);
});
